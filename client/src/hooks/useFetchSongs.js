import { useQuery } from '@apollo/client';
import { GET_SONGS } from '../graphql/queries';

export const useFetchSongs = () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  return {
    loading,
    error,
    songs: data?.songs || [],
  };
};
