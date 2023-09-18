
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { VOTE_SONG } from '../graphql/mutations';

const Vote = () => {
  const [userId, setUserId] = useState(1); // Replace with your own user ID
  const [songId, setSongId] = useState('');

  const [voteSong] = useMutation(VOTE_SONG);

  const handleVote = () => {
    voteSong({ variables: { userId, songId } })
      .then((response) => {
        console.log('Vote successful:', response.data);
        // Additional logic or UI updates after successful vote
      })
      .catch((error) => {
        console.error('Error voting:', error);
        // Handle error condition if necessary
      });
  };

  return (
    <div>
      <h2>Vote for your favorite song:</h2>
      <select value={songId} onChange={(e) => setSongId(e.target.value)}>
        <option value="">Select a song</option>
        {/* Render options for available songs */}
      </select>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default Vote;
