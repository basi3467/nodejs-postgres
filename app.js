const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');

const app = express();
app.use(bodyParser.json());

const model = require('./models/tablemodel')
model.sequelize.sync();
// // drop the table if it already exists
// model.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// require("./routes/route")(app);

app.use('/',route);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Postgres connection." });
  });
// app.use('/',route);


const port = process.env.port || 3000;
app.listen(port, function () {
    console.log('app listening at port %s', 3000);
});






