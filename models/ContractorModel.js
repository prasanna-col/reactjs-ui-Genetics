const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  fullName: {
    type: String,
  },
  contractor_id: {
    type: String,
  },
  street_address: {
    type: String,
  },
  city: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  partner_name: {
    type: String,
  },
  pharmacy_name: {
    type: String,
  },
  email_address: {
    type: String,
  },
  phone: {
    type: String,
  },
  username: {
    type: String,
  },
  state: {
    type: String,
  },
  ncpa: {
    type: String,
  },
  partner_id: {
    type: String,
  },
});

module.exports = mongoose.model("contractors", contractorSchema);
