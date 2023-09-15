const catchAsync = require("../utils/catchAsync")


const axios = require('axios'); // Assuming you are using Axios for making HTTP requests
// Create a function to make the API request
const request = require('request');

const getRequestOption=(image,prompt)=>{
    return {
        'method': 'POST',
        'url': 'https://stablediffusionapi.com/api/v5/interior',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "key": "I1xCFIo2FdGXCEvfLMHLsFqn6DTQsqTaNtYg3ccH4NGe4ySgUsceshH1DVsF",
          "init_image" : image,
          "prompt" :prompt,
          "steps" : 50,
          "guidance_scale" : 7
        })
      }
}


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
const transformRoom=catchAsync(async (req,res,next)=>{
let {room,themes,image}=req.body
console.log(image);
let output_images=[]
if(typeof themes==="string")
themes=JSON.parse(themes)
let requests=[]
for (const themeItem of themes) {
    const prompt = `${room} ${themeItem}`;
    requests.push(makeRequest(image, prompt));
  }
  
  // Wait for all requests to complete using Promise.all
  Promise.all(requests)
    .then((responses) => {
      // All requests have completed successfully, responses contains the results
      console.log(responses);
  
      // Send the final response when all requests are done
      res.status(200).send({
        status: "success",
        result: responses,
      });
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
      res.status(500).send({
        status: "error",
        error: "An error occurred while processing the requests",
      });
    });
})

module.exports={
    transformRoom
}