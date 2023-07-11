import { Song, Vote } from '../../models';

const songResolvers = {
  Query: {
    songs: () => Song.findAll(),
  },
  Mutation: {
    voteSong: async (_, { userId, songId }) => {
      // Check if the user has already voted for the day
      const existingVote = await Vote.findOne({ where: { userId } });
      if (existingVote) {
        throw new Error('User has already voted for the day.');
      }

      // Create a new vote record
      const vote = await Vote.create({ userId, songId });

      return vote;
    },
  },
};

export default songResolvers;
