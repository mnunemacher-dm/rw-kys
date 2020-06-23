import gql from 'graphql-tag'

export const schema = gql`
  type ConfidenceLevel {
    id: Int!
    name: String!
  }

  type Query {
    confidenceLevels: [ConfidenceLevel!]!
    confidenceLevel(id: Int!): ConfidenceLevel!
  }

  input CreateConfidenceLevelInput {
    name: String!
  }

  input UpdateConfidenceLevelInput {
    name: String
  }

  type Mutation {
    createConfidenceLevel(input: CreateConfidenceLevelInput!): ConfidenceLevel!
    updateConfidenceLevel(
      id: Int!
      input: UpdateConfidenceLevelInput!
    ): ConfidenceLevel!
    deleteConfidenceLevel(id: Int!): ConfidenceLevel!
  }
`
