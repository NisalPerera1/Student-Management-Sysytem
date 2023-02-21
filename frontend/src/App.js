import './App.css';
import Home from './Components/Pages/home'
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/Pages/about';
import Classes from './Components/Pages/classes';
import Students from './Components/Pages/students';
import Contact from './Components/Pages/contact';
import Papers from './Components/Pages/Papers/SelectGarde';


function App() {
  return (
  <div>
  
    
    <Router>
			<Navbar align="center"/>
			<Routes>
				<Route path='/' exact element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/students' element={<Students/>} />
				<Route path='/classes' element={<Classes/>} />
				<Route path='/contact' element={<Contact/>} />
        <Route path='/papers' element={<Papers/>} />

			</Routes>
			</Router>
   </div>

 
  
  
  );
}

export default App;
