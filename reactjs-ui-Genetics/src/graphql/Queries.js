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

const CREATE_CONTRACTOR = gql`
  mutation Mutation($contractorInput: ContractorInput) {
    contractorCreate(contractorInput: $contractorInput) {
      username
      ncpa
    }
  }
`;

const GET_CONTRACTOR = gql`
  query {
    contractors {
      id
      fullName
      contractor_id
      street_address
      city
      zip_code
      partner_name
      pharmacy_name
      email_address
      phone
      username
      state
      ncpa
      partner_id
    }
  }
`;

const DELETE_CONTRACTOR = gql`
  mutation Mutation($contractorDelete: ContractorDelete) {
    deleteContractor(contractorDelete: $contractorDelete) {
      id
      username
    }
  }
`;
export {
  REGISTER,
  LOGIN,
  PATIENT_STATUS,
  CREATE_CONTRACTOR,
  GET_CONTRACTOR,
  DELETE_CONTRACTOR,
};
