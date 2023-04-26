import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';

import Button from '@mui/material/Button';
import NavItem from '../NavItem/NavItem';

const Navbar = () => {

  // const navigate = useNavigate();

  // const navItem = ["Home", "Progress", "Setting", "Profile", "Logout"];
  const navItem = [
    {
      text: "Home",
      route: "/"
    },
    {
      text: "Progress",
      route: "/progress"
    }
  ]

  return (
      <div className='navbar-container'>
        
        <Link to='/add'>

          <Button 
            variant="contained"
            color="btn"
            className='btn-add'
            sx={{mt: '30px', py: '10px'}}
          >
            Add Assignment
          </Button>

        </Link>

        <div>
          {
            navItem.map(data => (
              <NavItem 
                text={data.text}
                route={data.route}
              />
            ))
          }
          
        </div>
        


      </div>
    
  )
}



export default Navbar;