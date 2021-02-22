const { response } = require("express");
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
  .then(()=>{
    res.send("data added")
  })

});
router.delete("/api/delete/:id", (req, res) => {
  let id= req.params.id;
  todo.destroy({where:{id:id}}).then(()=>{
    res.send("Data deleted")
  })
});
router.put('/api/delete/:id/:newtodo',(req,res)=>{
  const id= req.params.id;
  const newtodo=req.params.newtodo;
  console.log(id,newtodo);
  todo.update({
    list:req.params.newtodo
  },{
    where:{
      id:req.params.id
    }
  }).then(()=>{
    res.send("Data edited")
  })
})

module.exports = router;
