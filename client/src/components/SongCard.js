import React from 'react';

const SongCard = ({ song }) => {
    return (
        <div className="song-card">
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
        </div>
    )
}

export default SongCard;
