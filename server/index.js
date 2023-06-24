import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema/schema';
import { resolvers } from './resolvers/resolvers';
import cron from 'node-cron';
import { fetchSongsFromSpotify } from './utils/spotify';

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

// Schedule the task to run every day at 12:00 AM PST
cron.schedule('0 0 * * *', () => {
  // Fetch new songs from the Spotify API
  fetchSongsFromSpotify()
    .then((songs) => {
      console.log('Fetched new songs:', songs);
      // Update db with current songs of the day
    })
    .catch((error) => {
      console.error('Error fetching songs:', error);
    });
});

app.listen({ port: 4000 }, () =>
  console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
);
