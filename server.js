const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/router");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(4001, () => {
  console.log("server started");
});
