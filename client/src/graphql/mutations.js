import { gql } from '@apollo/client';

export const VOTE_SONG = gql`
  mutation VoteSong($userId: Int!, $songId: String!) {
    voteSong(userId: $userId, songId: $songId) {
      id
      userId
      songId
    }
  }
`;
