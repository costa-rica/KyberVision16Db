// NR: refactored 2025-03-13
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

// const SyncContract = sequelize.define(
//   "SyncContract",
const ContractScriptVideo = sequelize.define(
  "ContractScriptVideo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    scriptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deltaTime: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
    },
  },
  {
    tableName: "contractScriptVideo",
  }
);

module.exports = ContractScriptVideo;
