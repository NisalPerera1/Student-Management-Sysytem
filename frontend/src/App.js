import './App.css';
import Home from './Components/Pages/home'
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/Pages/about';
import Classes from './Components/Pages/classes';
import Feereport from './Components/Pages/feereport';
import Students from './Components/Pages/students';
import Contact from './Components/Pages/contact';
//import axios from 'axios';


function App() {
  return (
  <div>
    <div>
   <div>
    
    <Router>
			<Navbar/>
			<Routes>
				<Route path='/' exact element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/students' element={<Students/>} />
				<Route path='/feereports' element={<Feereport/>} />
				<Route path='/classes' element={<Classes/>} />
				<Route path='/contact' element={<Contact/>} />
			
			</Routes>
			</Router>
   </div>

  </div>
    </div>
  
  
  );
}

export default App;
