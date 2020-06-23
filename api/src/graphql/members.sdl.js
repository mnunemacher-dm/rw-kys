import gql from 'graphql-tag'

export const schema = gql`
  type Member {
    id: Int!
    name: String!
  }

  type Query {
    members: [Member!]!
    member(id: Int!): Member!
  }

  input CreateMemberInput {
    name: String!
  }

  input UpdateMemberInput {
    name: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member!
    updateMember(id: Int!, input: UpdateMemberInput!): Member!
    deleteMember(id: Int!): Member!
  }
`
