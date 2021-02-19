const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/router");
const db =require('./models')

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

db.sequelize.sync().then((req)=>{
  app.listen(4001, () => {
    console.log("server started");
  });
  
})
