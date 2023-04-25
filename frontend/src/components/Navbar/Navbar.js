import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';

import Button from '@mui/material/Button';
// import theme from '../../constant/theme';
// import { ThemeProvider } from '@emotion/react';

const Navbar = () => {

  // const navigate = useNavigate();

  return (
    // <ThemeProvider theme={theme}>
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
        


      </div>
    // </ThemeProvider>
    
  )
}



export default Navbar;