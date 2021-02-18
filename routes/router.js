const express = require("express");
const router = express.Router();

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "Mydb",
});

router.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM todo";
  a;
  db.query(sqlGet, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/api/insert", (req, res) => {
  const todo = req.body.todo;
  console.log(todo);
  const sqlinsert = "INSERT INTO todo(todo) VALUES(?)";
  db.query(sqlinsert, todo, (err, result) => {
    console.log(result);
  });
});
router.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log("id is " + id);
  const sqlDelete = "DELETE FROM todo WHERE id=?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

module.exports = router;
