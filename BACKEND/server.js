const express = require('express');
const mongoose =require ('mongoose');
const bodyParser=require('body-parser'); //information (json walin ) ena req eka converting to javascript object 
const cors=require('cors');
const app = express();

const PORT = 8070; 

const studentRouter= require("./Routes/students.js");
const student = require('./Models/Student');


const paperRouter= require("./Routes/papers.js");
const Papers = require('./Models/Papers');





//app midleware
app.use(bodyParser.json());
app.use(cors());

app.use("/student",studentRouter)
app.use("/paper",paperRouter)

const URL="mongodb+srv://NisalPerera2:Nisal12345@stumansys.bwxtcl1.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);
mongoose.connect(URL)
.then(()=>{
    console.log("Db Connected Successfully");
  }) 
.catch((err)=>{
        console.log("Sorry Db is not Connected!!!",err );
    }
)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
}) 