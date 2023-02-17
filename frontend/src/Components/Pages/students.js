import Button from '@mui/material/Button';
import axios from 'axios';
import React, {useState } from 'react';

function FormButton() {
  //get http req ekt ada use state eka 
  const [ShowStudent, setShowStudent] = useState([]);

  //post http req requirements 
  const [showForm, setShowForm] = useState(false);
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  
//get http req eke setter


  //fetching function
  function getData() {
    axios.get('http://localhost:8070/Student/')
      .then(response => {
        setShowStudent(response.data);
      
      })
      .catch(error => {
        console.log(error);
      });
  }

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

  //post eke body eka
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleData = () => {
    setShowStudent(!ShowStudent);
  };




  
  return (<div>
   
      

      
      
   
<Button style={{right:"20px",left:"1523px"} } variant="contained" onClick={getData} class="btn btn-primary btn-lg"> Show Students </Button>
<Button style={{ position: 'relative', left:'750px', top: '10px', right: '20px'} } className="btn-Modal" variant="contained" onClick={handleClick} class="btn btn-primary btn-lg"> Add New Student </Button>
   <div>
{ShowStudent&& (
        <ul>
          {ShowStudent.map(item => (
            <li key={item.id}>
              {item.name}<br></br>
              {item.age} <p1>Years Old</p1><br></br>
              {item.gender}



              </li>
          ))}
        </ul>
      )}    </div> 


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
                    }}/>
  </div>
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
)}
 
  </div>
)}
export default FormButton;