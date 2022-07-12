import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation Mutation($userInput: UserInput) {
    register(userInput: $userInput) {
      username
      email
      password
    }
  }
`;

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`;

const PATIENT_STATUS = gql`
  query {
    dashboard {
      status
      value
      color
    }
  }
`;

export { REGISTER, LOGIN, PATIENT_STATUS };
