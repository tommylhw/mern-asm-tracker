import React, { useState } from 'react';
import './AddPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { TextField } from '@mui/material'; 

const CreatePage = () => {

  const navigate = useNavigate();

    const [form, setForm] = useState({
        code: "",
        credit: "",
        gpa: "",
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
            .post('http://localhost:4000/api/database', form)
            .then((res) => {
                setForm({
                    code: "",
                    credit: "",
                    gpa: "",
                });

                navigate('/');
            })
            .catch((error) => {
                console.log("Error in creating record");
            })
    }

  return (
    <div>
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

              <TextField id="outlined-basic" label="Outlined" variant="outlined" />

              <label htmlFor='credit'>Credit</label>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />

              <label htmlFor='gpa'>GPA</label>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />

              <button type='submit'>Create</button>
              
          </form>
      </div>
    </div>
    
  )
}

export default CreatePage;