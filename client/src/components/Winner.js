import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WINNER } from '../graphql/queries'; // Import the correct query

const Winner = () => {
  const { loading, error, data } = useQuery(GET_WINNER); // Use useQuery to fetch data

  if (loading) {
    return <div>Loading winner...</div>;
  }

  if (error) {
    return <div>Error fetching winner: {error.message}</div>;
  }

  const winner = data.winner; // Access the winner data from the query response

  if (!winner) {
    return <div>No winner yet</div>;
  }

  return (
    <div>
      <h2>Winner of the previous day:</h2>
      <h3>{winner.title}</h3>
      <p>{winner.channelTitle}</p>
    </div>
  );
};

export default Winner;
