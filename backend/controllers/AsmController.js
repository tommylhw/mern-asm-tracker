const AsmModel = require('../models/AsmModel');
const mongoose = require('mongoose')

// get all the data
const getAsms = async (req, res) => {
    const asms = await AsmModel.find();

    res.status(200).json(asms);
}

// get a single asm
const getAsm = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such asm'});
    }

    const asm = await AsmModel.findById(id);

    if (!asm) {
        return res.status(404).json({error: 'No such asm'})
    }
    
    res.status(200).json(asm)
}

// create a new asm
const createAsm = async (req, res) => {
    try {
        const asm = await AsmModel.create(req.body);
        res.status(200).json(asm);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

// delete a asm
const deleteAsm = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such asm'});
    }

    const asm = await AsmModel.findOneAndDelete({_id: id}, {
        ...req.body
    });

    if (!asm) {
        return res.status(404).json({error: 'No such asm'})
    }
    
    res.status(200).json(asm)

}

// update a asm
const updateAsm = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such asm'});
    }

    const asm = await AsmModel.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!asm) {
        return res.status(404).json({error: 'No such asm'})
    }
    
    res.status(200).json(asm)
}

module.exports = {
    getAsms,
    getAsm,
    createAsm,
    deleteAsm,
    updateAsm
}