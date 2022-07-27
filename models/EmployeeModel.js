const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const empolyeeSchema = new Schema({
  emp_name: {
    type: String,
  },
  emp_number: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  state: {
    type: String,
  },
  username: {
    type: String,
  },
  state: {
    type: String,
  },
  status: {
    type: String,
  },
  select_role: {
    type: String,
  },
});

module.exports = mongoose.model("empolyee", empolyeeSchema);
