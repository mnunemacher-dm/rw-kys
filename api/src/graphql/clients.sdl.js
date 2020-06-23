import gql from 'graphql-tag'

export const schema = gql`
  type Client {
    id: Int!
    name: String!
  }

  type Query {
    clients: [Client!]!
    client(id: Int!): Client!
  }

  input CreateClientInput {
    name: String!
  }

  input UpdateClientInput {
    name: String
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client!
    updateClient(id: Int!, input: UpdateClientInput!): Client!
    deleteClient(id: Int!): Client!
  }
`
