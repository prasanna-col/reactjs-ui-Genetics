const constructorSchema = require("../../models/ContractorModel");

module.exports = {
  contractors: async (_, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    return await constructorSchema.find({});
  },

  contractorCreate: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const contractor = new constructorSchema({
      fullName: args.contractorInput.fullName,
      contractor_id: args.contractorInput.contractor_id,
      street_address: args.contractorInput.street_address,
      city: args.contractorInput.city,
      zip_code: args.contractorInput.zip_code,
      partner_name: args.contractorInput.partner_name,
      pharmacy_name: args.contractorInput.pharmacy_name,
      email_address: args.contractorInput.email_address,
      phone: args.contractorInput.phone,
      username: args.contractorInput.username,
      state: args.contractorInput.state,
      ncpa: args.contractorInput.ncpa,
      partner_id: args.contractorInput.partner_id,
    });
    try {
      await contractor.save();
      return contractor;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  updateContractor: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("You are not authenticated");
    }
    console.log(args.updateContractorInput);
    return await constructorSchema.findByIdAndUpdate(args.updateContractorInput.id, {
      fullName: args.updateContractorInput.fullName,
      contractor_id: args.updateContractorInput.contractor_id,
      street_address: args.updateContractorInput.street_address,
      city: args.updateContractorInput.city,
      zip_code: args.updateContractorInput.zip_code,
      partner_name: args.updateContractorInput.partner_name,
      pharmacy_name: args.updateContractorInput.pharmacy_name,
      email_address: args.updateContractorInput.email_address,
      phone: args.updateContractorInput.phone,
      username: args.updateContractorInput.username,
      state: args.updateContractorInput.state,
      ncpa: args.updateContractorInput.ncpa,
      partner_id: args.updateContractorInput.partner_id,
    });
  },

  deleteContractor: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    // console.log(args);
    return await constructorSchema.findByIdAndDelete(args.contractorDelete.id);
  },
};
