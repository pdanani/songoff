import { Song, Vote } from '../../models';

const voteResolvers = {
  Vote: {
    song: async (parent) => {
      const song = await Song.findByPk(parent.songId);
      return song;
    },
  },
};

export default voteResolvers;
