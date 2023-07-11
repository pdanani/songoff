import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Song extends Model { }

Song.init(
    {
        videoId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'song',
        timestamps: false,
    }
);

export default Song;
