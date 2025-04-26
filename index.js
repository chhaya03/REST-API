const express = require('express')

const users = require("./MOCK_DATA.json")   //databse
const app = express();
const PORT =8000;
const fs = require('fs')


//Middleware - plugin
app.use(express.urlencoded({extended:false}));


//middleware for creating a text file within some details
app.use((req,res, next) =>{
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}:${req.ip}:${req.method}:${req.path}`,
    (err,data)=>{
      next();
    }
  )
})


// Routes
app.get('/api/users' , (req,res) =>{
  return res.json(users)
})


//get the user by name 
app.get('/users' ,(req,res)=>{
  const html =`
  <ul>
  ${users.map((user) =>`<li>${user.first_name}</li>`)}
  
  </ul>
  `
   res.send(html)
});


//get the user by id
app.get('/api/users/:id' ,(req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user) =>user.id===id);

  return res.json(user)
})


//create new users
app.post("/api/users" , (req,res) => {
  return res.json({status :"pending"})
})


//edit the user with id
app.patch("/api/users/:id" , (req,res) => {
  return res.json({status :"pending"})
})


//delete the user with id 
app.delete("/api/users/:id" , (req,res) => {
  return res.json({status :"pending"})
})



app.listen(PORT,()=>console.log(`Server started at Port:${PORT}`))
