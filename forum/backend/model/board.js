"use strict";

module.exports = function(sequelize, DataTypes) {
  var board = sequelize.define('board', {
	  board_sq : { type : DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
    user_sq : { type : DataTypes.INTEGER.UNSIGNED, allowNull : false },
    board_type : { type : DataTypes.STRING(200), allowNull : false },
    announce_yn : { type : DataTypes.STRING(45), defaultValue : 'N'},
    title : { type : DataTypes.STRING(2000), allowNull : false },
    contents : { type : DataTypes.STRING(2000) },
    hit : { type : DataTypes.INTEGER.UNSIGNED, defaultValue : 0 },
    del_yn : { type : DataTypes.STRING(5), defaultValue : 'N' }
  }, {
	  timestamps: true,
	  tableName: 'board'
  });
  return board;
};
