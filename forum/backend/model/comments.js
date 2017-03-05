"use strict";

module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define('comments', {
	comments_sq : { type : DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
    user_sq : { type : DataTypes.INTEGER.UNSIGNED, allowNull : false },
    board_sq : { type : DataTypes.STRING(200), allowNull : false },
    contents : { type : DataTypes.STRING(2000) },
    del_yn : { type : DataTypes.STRING(5), defaultValue : 'N' }
  }, {
	  timestamps: true,
	  tableName: 'comments'
  });
  return comments;
};
