import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { VOTE_SONG } from '../graphql/mutations';
import { GET_SONGS } from '../graphql/queries';

const Vote = () => {
  const [userId, setUserId] = useState('');
  const [songId, setSongId] = useState('');
  const [voteSong] = useMutation(VOTE_SONG);
  const { loading, error, data } = useQuery(GET_SONGS);

  useEffect(() => {
    // Try to get the userId from localStorage
    let storedUserId = localStorage.getItem('userId');
    
    if (!storedUserId) {
      // If no userId in localStorage, generate a new one
      storedUserId = Math.floor(Math.random() * 1000000).toString();
      localStorage.setItem('userId', storedUserId);
    }
    
    setUserId(storedUserId);
  }, []);

  const handleVote = () => {
    voteSong({ variables: { userId: parseInt(userId), songId } })
      .then((response) => {
        console.log('Vote successful:', response.data);
        alert('Thank you for voting!');
        // Redirect to home page or show a success message
      })
      .catch((error) => {
        console.error('Error voting:', error);
        alert('Error voting. Please try again.');
      });
  };

  if (loading) return <div>Loading songs...</div>;
  if (error) return <div>Error loading songs: {error.message}</div>;

  return (
    <div>
      <h2>Vote for your favorite song:</h2>
      <select value={songId} onChange={(e) => setSongId(e.target.value)}>
        <option value="">Select a song</option>
        {data.songs.map((song) => (
          <option key={song.videoId} value={song.videoId}>
            {song.title} by {song.artist}
          </option>
        ))}
      </select>
      <button onClick={handleVote} disabled={!songId}>Vote</button>
    </div>
  );
};

export default Vote;