import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../HomePage/HomePage.css';
import { Typography, Divider } from '@mui/material';

import AsmList from '../../components/AsmList/AsmList';

const HomePage = () => {

  const [dataSet, setDataSet] = useState([]);

  

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/database/')
      .then((res) => {
        setDataSet(res.data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className='page-container'>

      <div className='upper-part-container'>
        <div className='due-this-week-container'>
          <p className='home-page-heading'>Assignment due this week</p>
          <div className='due-this-week-content-container'>
            
          </div>
        </div>

        <div className='home-progress-container'>
            <p className='home-page-heading'>Progress</p>

            <div className='home-progress-content-container'>

            </div>
          </div>
      </div>

      <Divider sx={{m: '20px'}}/>

      <div className='lower-part-container'>
      <table className='list-container'>
        {dataSet.map((data) => {
          return (
            <AsmList 
              data={data}
            />
          )
        }
          
        )}
      </table>
      </div>
      
    </div>
  )
}

export default HomePage;