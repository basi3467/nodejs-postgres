const Sequelize = require('sequelize');
/*const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'database name(can be mysql/postgres/sqlite/mariadb)' postgres needs two libraries(pg an dpg-hstore)
})*/
const sequelize = new Sequelize('dvdrental', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    }
  });
//const sequelize = new Sequelize('postgres://postgres:postgres@server.com:portnumber/dvdrental');
sequelize.authenticate().then(() => { //.authenticate() is used to check if connection is established or not which is 
  console.log("Success!");   
           // a promise so we are using .then to do what if connection is established  
}).catch((err) => {
  console.log(err);
});

module.exports = sequelize;
