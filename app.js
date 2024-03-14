//importing
const express = require("express");
const morgan = require("morgan");

//initializing

const app= new express();
app.use(morgan('dev'));

//midleware
app.use(express.json());

//in momery storage task
let tasks =[];


//rout to get all task
app.get('/',(req,res)=>{res.json(tasks);
    
})
  

//route to create new task
app.post('/task',(req,res)=>{ 
    tasks.push(req.body);
    res.send({message:"TASK ADDED",tasks});})




//route to get task\    \   
app.get('/task/:id',(req,res)=>{
    const id= req.params.id;
    const task = tasks.find(task=>task.id===id)
    if(!task){
        res.send("task not found");
    
    }
     else{
    res.json(task)
    }
})

// app.put('/update/:id',(req,res)=>{
//     console.log("req.body");
// tasks.splice(0,1,req.body);
// res.send({message:"UPDATED",tasks})})      

app.put('/update/:id',(req,res)=>{           //UPDATE
    const id=req.params.id;
    const updatedTask = req.body;
    const index = tasks.findIndex((task)=>task.id===id);
    if (index===-1){
        res.send("task not found")
    }
    else{
        tasks.splice(index,1,updatedTask);
        //tasks[index]updatedTask
        res.json(tasks);
    }
})

     //DETETE
     app.delete('/dele/:id',(req,res)=>{
        const id=req.params.id;  
        const deleteTask = req.body;
        const index = tasks.findIndex((task)=>task.id===id);
        if (index===-1){
            res.send("task not found")
        }
        else{
            tasks.splice(index,1);
            //tasks[index]updatedTask
            res.json(tasks);
        }
      })
        

app.listen(2000,(req,res)=>{
    console.log("running 1000")
});



