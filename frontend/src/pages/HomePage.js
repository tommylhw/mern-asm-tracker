import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      {dataSet.map((data) => (
        data.title
      ))}
    </div>
  )
}

export default HomePage;