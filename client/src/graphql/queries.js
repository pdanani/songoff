import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query GetSongs {
    songs {
      videoId
      title
      artist
    }
  }
`;

export const GET_WINNER = gql`
  query GetWinner {
    winner {
      videoId
      title
      artist
    }
  }
`;


