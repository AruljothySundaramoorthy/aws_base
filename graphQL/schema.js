const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    musicDirector: MusicDirectors
  }
  type MusicDirectors {
    id: ID!
    name: String!
    moviesComposed: Int!
    movies: [Movie]
  }
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    user: User
  }
  input CreatePostInput {
    title: String!
    content: String!
  }
  type Mutation {
    createUser(name: String!, email: String!): User
    createPost(input: CreatePostInput!): Post
    createMusicDirector(name: String!): MusicDirectors
    createMovie(title: String!, musicDirectorId: ID!): Movie
  }

  type Query {
    users: [User]
    posts: [Post]
    listMusicDirectors: [MusicDirectors]
    listMovies: [Movie]
  }
`;

module.exports = typeDefs;
