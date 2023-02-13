import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useState } from 'react';

function FormButton() {
  const [showForm, setShowForm] = useState(false);
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  

  function savetodb(e){

    e.preventDefault();
    const newStudent={
      name,
      address,
      age,
      gender
    }
    //backend posting
    axios.post("http://localhost:8070/Student/add/", newStudent).then(()=>{
      alert("Student Saved in the Database")}
    )
  
    .catch(()=>{
      alert("Sorry !!!! Student Saved failed")
    })
  }

  const handleClick = () => {
    setShowForm(!showForm);
  };
  
  return (<div>
    
<Button style={{ position: 'relative', left:'750px', top: '10px', right: '20px'} } className="btn-Modal" variant="contained" onClick={handleClick} class="btn btn-primary btn-lg"> Add New Student </Button>
  {showForm && (
    <form class="container" onSubmit={savetodb}>

    <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="name" 
        class="form-control" 
        id="name" 
        placeholder="Enter Student's Name" 
        onChange={(e)=>{
            setName(e.target.value);
                      }
                 }/></div>

      <div class="form-group">
        <label for="Adress">Address</label>
        <input type="name" 
        class="form-control" 
        id="address" 
        placeholder="Enter Student's Address"
        onChange={(e)=>{
          setAddress(e.target.value);
                    }
               } />
      </div>
  
  
      <div class="form-group">
        <label for="exampleInputEmail1">Age</label>
        <input type="age" 
        class="form-control" 
        id="age" 
        placeholder="Enter Student's Age" 
        size={100}
        onChange={(e)=>{
          setAge(e.target.value);
                    }
               }/>
      </div>
  
      <div class="form-group">
        <label for="exampleInputEmail1">Gender</label>
        <input type="age" 
        class="form-control" 
        id="gender" 
        placeholder="Enter your Gender" 
        size={100}
        onChange={(e)=>{
          setGender(e.target.value);
                    }
               }/>
  
        </div>
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
)}
  </div>
)}
export default FormButton;