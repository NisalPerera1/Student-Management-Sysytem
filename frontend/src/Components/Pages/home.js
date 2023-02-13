import React from "react"; 
import pic2 from './header.png';
import toggleModal from "./students"
import 'bootstrap/dist/css/bootstrap.min.css';

 export default function Home(){
 return<div>

        <div id='head' align='center' >
        <img src={pic2} height='450' align="center" alt=''/>
        </div>

        <div class="row">
                <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                <h5 class="card-title">New User Registration</h5>
                <p class="card-text">follow below link</p>
                <a href="#" class="btn btn-primary" onClick={() => toggleModal()}>Add a New Student</a>
                </div>
                </div>
                 </div>

        <div class="col-sm-6">
                <div class="card">
                 <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
        </div>
        </div>
        

}
