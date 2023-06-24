import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Sequelize instance with the connection details
config()
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Define models and their relationships
export const Song = sequelize.define('song', {
  title: Sequelize.STRING,
  artist: Sequelize.STRING,
});

export const Vote = sequelize.define('vote', {
  userId: Sequelize.INTEGER,
  songId: Sequelize.INTEGER,
});

// Set up the relationships between models
Song.hasMany(Vote);
Vote.belongsTo(Song);

// Sync the models with the database
sequelize.sync();


