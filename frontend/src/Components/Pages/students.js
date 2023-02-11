import React from "react";
import Radio from '@mui/material/Button';
import RadioGroup from '@mui/material/Button';
import Button from '@mui/material/Button';
import { useState } from 'react';

  function Students(){
    const[Students, setStudents]=useState(false);
    const toggleModal=()=>{
        setStudents(!Students);
         };

    if(Students){
    document.body.classList.add('active-modal')
            }
    else{
    document.body.classList.remove('active-modal')
        }

return ( 
          <>
         <div> 
          <h2 align="center">Here is Your Students' Details Upto Now</h2></div>
          `   <div>
            
            <div id="Buton" >    
        <Button style={{ position: 'relative', left:'750px', top: '10px', right: '20px'} } className="btn-Modal" variant="contained" onClick={toggleModal} class="btn btn-primary btn-lg"> Add New Student </Button>
		<p></p>
         </div>
            </div>
         
      {Students && (
<div className="Modal">
<div onClick={toggleModal} className="overlay"></div>  
  <div className="Modal-content">
      <h2 align ="center"> Enter The Student's Credintials </h2>
    <br></br>

<div class="d-flex justify-content-center">
  <form>

  <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="name" class="form-control" id="stname" placeholder="Enter Student's Name" />
    </div>

    <div class="form-group">
      <label for="Adress">Address</label>
      <input type="name" class="form-control" id="staddress" placeholder="Enter Student's Address" />
    </div>


    <div class="form-group">
      <label for="exampleInputEmail1">Age</label>
      <input type="age" class="form-control" id="stage" placeholder="Enter Student's Age" size={100}/>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Gender</label>
      <div>

      <input type="radio" justify="center" value="Male"/>Male</div>
      <input type="radio" />Female</div>


   

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>








      <></>
          </div>
        </div>
      )}

   </>
  );
};
   export default Students;