import React from "react"; 
//import pic from './1.jpg';
//import Avatar from '@mui/material/Avatar'
//import pic2 from './back.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import header from './header2.png';
import Footer from "./footer";



 export default function Home(){
 return<div>

        <div id='head' align='center' >
        <img src={header} align='center' height='350' width="1680px" alt=''/>
        </div><br></br>
        <div class="group">
          
<div id="card" style={{left: "120px"}}>
<h1><span class="badge badge-secondary" id="card-title">Purpose</span></h1>
  <ul>
    <li class="card-text">Add Student who are newly joined to my classes</li>
    <li class="card-text">View My current All Students</li>
    <li class="card-text">Update Student who needs to modify every year</li>
    <li class="card-text">Give Functionality to Contact me</li>
  </ul>
</div>


<Footer/>
</div> 



                </div>

        

}
