const dashboardSchema = require("../../models/dashboardModal");

module.exports = {
  dashboard: async (_, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    return await dashboardSchema.find({});
  },

  dashboardCreate: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const event = new dashboardSchema({
      status: args.dashboardInput.status,
      value: args.dashboardInput.value,
      color: args.dashboardInput.color,
    });
    try {
      await event.save();
      return event;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
