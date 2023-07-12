import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SONGS } from '../graphql/queries';
import SongList from '../components/SongList';

const HomePage = () => {
    const { loading, error, data } = useQuery(GET_SONGS);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (data && data.songs) {
            setSongs(data.songs);
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Today's Songs</h1>
            <SongList songs={songs} />
        </div>
    );
};

export default HomePage;
