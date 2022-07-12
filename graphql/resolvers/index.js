const authResolver = require("./auth");
const dashboardResolver = require("./dashboardResolver");
const rootResolver = {
  ...authResolver,
  ...dashboardResolver,
};

module.exports = rootResolver;
