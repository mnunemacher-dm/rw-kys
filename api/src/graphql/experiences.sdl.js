import gql from 'graphql-tag'

export const schema = gql`
  type Experience {
    id: Int!
    name: String!
  }

  type Query {
    experiences: [Experience!]!
    experience(id: Int!): Experience!
  }

  input CreateExperienceInput {
    name: String!
  }

  input UpdateExperienceInput {
    name: String
  }

  type Mutation {
    createExperience(input: CreateExperienceInput!): Experience!
    updateExperience(id: Int!, input: UpdateExperienceInput!): Experience!
    deleteExperience(id: Int!): Experience!
  }
`
