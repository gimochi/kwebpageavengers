"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
	  user_sq : { type : DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
	  id : { type : DataTypes.STRING(14), allowNull : false },
    pw : { type : DataTypes.STRING(2000), allowNull : false },
    name : { type : DataTypes.STRING(2000), allowNull : false },
    email : { type : DataTypes.STRING(2000), allowNull : false },
    student_id : { type : DataTypes.INTEGER },
    auth_sq : { type : DataTypes.INTEGER , defaultValue : 0 },
    del_yn : { type : DataTypes.STRING(5), defaultValue : 'N' }
  }, {
	  timestamps: true,
	  tableName: 'user'
  });
  return user;
};
  