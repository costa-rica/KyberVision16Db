// NR: refactored 2025-03-13
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");
const Match = require("./Match");

const Video = sequelize.define(
  "Video",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Match,
        key: "id",
      },
    },
    // groupContractId: {
    contractTeamUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    filename: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    videoFileCreatedDateTimeEstimate: {
      type: DataTypes.DATE,
    },
    videoFileSizeInMb: {
      type: DataTypes.FLOAT,
    },
    pathToVideoFile: {
      type: DataTypes.STRING,
    },
    processingStatus: {
      type: DataTypes.STRING,
      defaultValue: "PENDING",
    },
    youTubeVideoId: {
      type: DataTypes.STRING,
    },
    originalVideoFilename: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "videos",
  }
);

module.exports = Video;
