const express = require("express");
const router = express.Router();
const {todo}=require('../models')

router.get("/api/get", async(req, res) => {
  await todo.findAll().then((response)=>{
    res.send(response)
  })
});

router.post("/api/insert", (req, res) => {
  const data = req.body.todo;
  todo.create({
    list:data
  }).catch((err)=>{
    console.log(err);
  })

});
router.delete("/api/delete/:id", (req, res) => {
  let id= req.params.id;
  todo.destroy({where:{id:id}})
});

module.exports = router;
