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

type Dashboard {
  id: ID!
  status: String!
  value: String!
  color: String!
}

type RootQuery {
    users: [User!]!
    dashboard: [Dashboard!]
}

type RootMutation {
    register(userInput: UserInput): User
    login(email: String!, password: String!): AuthData!
    getUser(userId: ID!): User!
    dashboardCreate(dashboardInput: DashboardInput): Dashboard!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
