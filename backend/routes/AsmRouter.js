const express = require('express');

// import the controllers
const {
    getAsms,
    getAsm,
    createAsm,
    deleteAsm,
    updateAsm
} = require('../controllers/AsmController');

const router = express.Router();

// GET all data
router.get('/', getAsms);

// GET a single data 
router.get('/:id', getAsm);

// POST a new data
router.post('/', createAsm);

// DELETE a data
router.delete('/:id', deleteAsm);

// UPDATE a data
router.patch('/:id', updateAsm);

module.exports = router