import { gql } from 'apollo-server';

export const typeDefs = gql`
  input AddAuthorInput {
    name: String!
    twitter: String
  }

  input ChangeBookInput {
    id: Int!
    title: String!
  }

  type Author {
    name: String!
    twitter: String
  }
  
  type Book {
    title: String!
    author: String!
    id: Int!
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addAuthor(input: AddAuthorInput!): Author
    changeBookTitle(input: ChangeBookInput!): Book
    deleteBook(id: Int!): Boolean
  }
`;
