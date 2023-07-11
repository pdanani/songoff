import { useQuery } from '@apollo/client';
import { GET_WINNER } from '../graphql/queries';

export const useFetchWinners = () => {
  const { loading, error, data } = useQuery(GET_WINNER);

  return {
    loading,
    error,
    winner: data?.winner,
  };
};
