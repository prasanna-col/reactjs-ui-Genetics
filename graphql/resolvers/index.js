const authResolver = require("./auth");
const dashboardResolver = require("./dashboardResolver");
const contractorResolver = require("./contractorResolver");
const rootResolver = {
  ...authResolver,
  ...dashboardResolver,
  ...contractorResolver,
};

module.exports = rootResolver;
