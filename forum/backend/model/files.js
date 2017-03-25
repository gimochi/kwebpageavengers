"use strict";

module.exports = function(sequelize, DataTypes) {
  var files = sequelize.define('files', {
	file_sq : { type : DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
    file_name : { type : DataTypes.STRING(2000), allowNull : false },
    file_ext : { type : DataTypes.STRING(200), allowNull : false },
    del_yn : { type : DataTypes.STRING(5), defaultValue : 'N' }
  }, {
	  timestamps: true,
	  tableName: 'files'
  });
  return files;
};
