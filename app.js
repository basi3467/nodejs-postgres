const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');

const app = express();
app.use(bodyParser.json());

const model = require('./models/tablemodel')
const model = require('./models/tablemodel')
model.sequelize.sync(); // this will syncronize teh existing table
// to drop the table if it already exists use below step
// model.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// require("./routes/route")(app); // if we don't want to use const route creation we can use this step

app.use('/',route); //value between '' shows how our url looks like
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Postgres connection." });
  });
// app.use('/',route);


const port = process.env.port || 3000;
app.listen(port, function () {
    console.log('app listening at port %s', 3000);
});






