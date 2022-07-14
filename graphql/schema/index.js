const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type User {
  _id: ID!
  username: String!
  email: String!
  password: String
}

type AuthData {
  userId: ID!
  token: String!
}

input UserInput {
  username: String!
  email: String!
  password: String!
}

input DashboardInput {
  status: String!
  value: String!
  color: String!
}

input ContractorInput {
  fullName: String!
  contractor_id: String!
  street_address: String!
  city: String!
  zip_code: String!
  partner_name: String!
  pharmacy_name: String!
  email_address: String!
  phone: String!
  username: String!
  state: String!
  ncpa: String!
  partner_id: String!
}

type Dashboard {
  id: ID!
  status: String!
  value: String!
  color: String!
}

type Contractor {
  id: ID!
  fullName: String!
  contractor_id: String!
  street_address: String!
  city: String!
  zip_code: String!
  partner_name: String!
  pharmacy_name: String!
  email_address: String!
  phone: String!
  username: String!
  state: String!
  ncpa: String!
  partner_id: String!
}
input ContractorDelete {
  id: ID!
}
type RootQuery {
    users: [User!]!
    dashboard: [Dashboard!]
    contractors: [Contractor!]
}

type RootMutation {
    register(userInput: UserInput): User
    login(email: String!, password: String!): AuthData!
    getUser(userId: ID!): User!
    deleteContractor(contractorDelete: ContractorDelete): Contractor
    dashboardCreate(dashboardInput: DashboardInput): Dashboard!
    contractorCreate(contractorInput: ContractorInput): Contractor!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
