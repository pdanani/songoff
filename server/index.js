import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema/schema';
import { resolvers } from './resolvers/resolvers';


const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
);
