import React from 'react';


import {Nav,NavLink,Bars,NavMenu} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />




		<NavMenu>
		<NavLink to='/' activeStyle>
			HOME
		</NavLink>
		<NavLink to='/classes' activeStyle>
			YOUR CLASSES
		</NavLink>
		<NavLink to='/feereports' activeStyle>
			PAYMENTS
		</NavLink>
		<NavLink to='/students' activeStyle>
			STUDENTS
		</NavLink>
		<NavLink to='/about' activeStyle>
			ABOUT
		</NavLink>
		<NavLink to='/contact' activeStyle>
			CONTACT ME
		</NavLink>
		
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
