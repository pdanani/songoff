import React from 'react';
import { useQuery } from '@apollo/client';
import { SongListContainer } from '../styles/StyledComponents';
import { GET_SONGS } from '../graphql/queries';

const SongList = () => {
    const { loading, error, data } = useQuery(GET_SONGS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const songs = data.songs;

    return (
        <SongListContainer>
            <h2>Song List</h2>
            {songs.map((song) => (
                <div key={song.id}>
                    <h3>{song.title}</h3>
                    <p>Artist: {song.artist}</p>
                </div>
            ))}
        </SongListContainer>
    );
}

export default SongList;
