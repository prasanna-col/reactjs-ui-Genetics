const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
  status: {
    type: String,
  },
  value: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("dashboard", dashboardSchema);
