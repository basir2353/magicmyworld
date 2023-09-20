const catchAsync = require("../utils/catchAsync");

const axios = require("axios"); // Assuming you are using Axios for making HTTP requests
// Create a function to make the API request
const request = require("request");
const User = require("../models/User");
const AppError = require("../utils/appError");

const getRequestOption = (image, prompt) => {
  return {
    method: "POST",
    url: "https://stablediffusionapi.com/api/v5/interior",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: "I1xCFIo2FdGXCEvfLMHLsFqn6DTQsqTaNtYg3ccH4NGe4ySgUsceshH1DVsF",
      init_image: image,
      prompt: prompt,
      steps: 50,
      guidance_scale: 7,
    }),
  };
};

// Create a function that returns a promise to make a request
function makeRequest(image, prompt) {
  return new Promise((resolve, reject) => {
    request(getRequestOption(image, prompt), (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body).output[0]);
      }
    });
  });
}
const transformRoom = catchAsync(async (req, res, next) => {
  let { room, themes, image } = req.body;
  if (typeof themes === "string") themes = JSON.parse(themes);
  const query = {
    _id: req.user.id,
    "subscription.status": "trial",
  };

  const update = {
    $inc: { "subscription.credits": -themes.length },
  };

  const user = await User.findOne(query);
console.log(user);
  if (user?.subscription.credits < themes.length) {
    // User not found, or credits are already zero
    return next(new AppError("User not eligible to perform this action", 400));
  }
  if (user) await User.findByIdAndUpdate(user._id, update);

  let requests = [];
  for (const themeItem of themes) {
    const prompt = `${room} ${themeItem}`;
    requests.push(makeRequest(image, prompt));
  }

  Promise.all(requests)
    .then((responses) => {
      console.log(responses);

      res.status(200).send({
        status: "success",
        result: responses,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({
        status: "error",
        error: "An error occurred while processing the requests",
      });
    });
});

module.exports = {
  transformRoom,
};
