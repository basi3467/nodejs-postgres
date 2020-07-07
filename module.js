//models folder
const Sequelize = require('sequelize');
const sequelize = require('../connection.js/dbconnect')

var Heroes = sequelize.define('heroes', {
    name: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true
  });

  //Posts.sync({force: true}).then(function () {// if we use force:true then it will drop the existing table and creates new ones
 
  module.exports = Heroes
