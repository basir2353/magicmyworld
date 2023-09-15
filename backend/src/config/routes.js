const {
  authRoute
} = require("../routes");
const otherRoutes = require("./otherRoutes");

module.exports = function (app) {
  app.use("/api/auth", authRoute);

  otherRoutes(app);
};
