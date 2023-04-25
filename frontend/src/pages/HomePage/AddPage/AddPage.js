import React, { useState } from 'react';
import './AddPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { TextField } from '@mui/material'; 

const AddPage = () => {

  const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        course: "",
        due_date: "",
        due_time: "",
        status: ""
    });

    const updateForm = (value) => {
        return setForm((prev) => {
            return {...prev, ...value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit");

        axios
            .post('http://localhost:4000/api/database/', form)
            .then((res) => {
                setForm({
                    title: "",
                    course: "",
                    due_date: "",
                    due_time: "",
                    status: ""
                });

                navigate('/');
            })
            .catch((error) => {
                console.log("Error in creating record");
            })
    }

  return (
    <div className='add-page-container'>
      <div className='form-container'>
          <form onSubmit={handleSubmit}>
              <label htmlFor='title'>Assignment Title</label>
              {/* <InputField
                  type="text"
                  className="input-code input"
                  id='code'
                  value={form.code}
                  onChange={(e) => updateForm({[e.target.id]: e.target.value})}
              /> */}

              <input 
                type='text' 
                id='title'
                className='input-field'
                value={form.title}
                onChange={(e) => updateForm({[e.target.id]: e.target.value})}
              />



              <label htmlFor='credit'>course</label>
              <input 
                type='text' 
                id='course'
                className='input-field'
                value={form.course}
                onChange={(e) => updateForm({[e.target.id]: e.target.value})}
              />

              <label htmlFor='gpa'>due_date</label>
              <input 
                type='text' 
                id='due_date'
                className='input-field'
                value={form.due_date}
                onChange={(e) => updateForm({[e.target.id]: e.target.value})}
              />

                <label htmlFor='gpa'>due_date</label>
                <input 
                    type='text' 
                    id='due_time'
                    className='input-field'
                    value={form.due_time}
                    onChange={(e) => updateForm({[e.target.id]: e.target.value})}
                />

              <button type='submit' className='btn-submit'>Create</button>
              
          </form>

      </div>
    </div>
    
  )
}

export default AddPage;