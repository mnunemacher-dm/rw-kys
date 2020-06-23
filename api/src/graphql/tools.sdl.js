import gql from 'graphql-tag'

export const schema = gql`
  type Tool {
    id: Int!
    name: String!
    createdAt: DateTime!
  }

  type Query {
    tools: [Tool!]!
    tool(id: Int!): Tool!
    searchTools(term: String): [Tool]
  }

  input CreateToolInput {
    name: String!
  }

  input UpdateToolInput {
    name: String
  }

  type Mutation {
    createTool(input: CreateToolInput!): Tool!
    updateTool(id: Int!, input: UpdateToolInput!): Tool!
    deleteTool(id: Int!): Tool!
  }
`
