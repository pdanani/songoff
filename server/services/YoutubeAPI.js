import fetch from 'node-fetch';

const API_KEY = process.env.YOUTUBE_API_KEY;

export const fetchSongs = () => {
  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.append('part', 'snippet');
  url.searchParams.append('type', 'video');
  url.searchParams.append('maxResults', '4');
  url.searchParams.append('q', 'music');
  url.searchParams.append('key', API_KEY);

  return fetch(url.toString())
    .then((res) => res.json())
    .then((data) => {
      return data.items.map((item) => {
        const { videoId } = item.id;
        const { title, channelTitle } = item.snippet;
        return { videoId, title, channelTitle };
      });
    });
};
