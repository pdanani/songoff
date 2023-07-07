import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Song {
    videoId: String!
    title: String!
    artist: String!
  }
  
  type Vote {
    id: ID!
    userId: Int!
    songId: String!
    song: Song!
  }

  type Query {
    songs: [Song!]!
  }

  type Mutation {
    voteSong(userId: Int!, songId: String!): Vote!
  }
`;

export default typeDefs;
