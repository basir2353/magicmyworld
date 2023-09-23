const {
  authRoute, interiorRoutes
} = require("../routes");
const otherRoutes = require("./otherRoutes");

module.exports = function (app) {
  app.use("/api/auth", authRoute);
  app.use("/api/interior", interiorRoutes);

  otherRoutes(app);
};
