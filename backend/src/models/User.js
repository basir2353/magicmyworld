const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
},
  email:{
    type:String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true,
    select:false
  },
  googleId: String,
   role: {
    type:String,
    enum: ['AD', 'US'],
    default: 'US'
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }

},{
  timestamps:true,
  versionKey: false,
});

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});


userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// userSchema.pre('save', function(next) {
//   const user = this;
//   if (!user.isModified('password')) {
//     return next();
//   }

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }

//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     });
//   });
// });
// userSchema.pre("findOneAndUpdate", function (next) {
//   const user = this;
//   if (!user._update.password) {
//     return next();
//   }

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }

//     bcrypt.hash(user._update.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
//       user._update.password = hash;
//       next();
//     });
//   });
// });
// userSchema.methods.comparePassword =async function (candidatePassword) {
//   const user = this;

//   return new Promise((resolve) => {
//     bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
//       if (err || !isMatch) {
//         return resolve(false);
//       }

//       resolve(true);
//     });
//   });
// };

module.exports = mongoose.model("User", userSchema);