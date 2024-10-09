import React from 'react';
import SongCard from './SongCard';
import { SongListContainer } from '../styles/StyledComponents';

const SongList = ({ songs }) => {
    return (
        <SongListContainer>
            {songs.map((song) => (
                <SongCard key={song.videoId} song={song} />
            ))}
        </SongListContainer>
    );
}

export default SongList;