const express = require('express');
const membersBLL = require('../BLL/membersBLL');

const router = express.Router();

//Gets all Members
router.get('/', async (req, res) => {
    try {
        const response = await membersBLL.getAllMembers();
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Gets Member by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await membersBLL.getMemberByID(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Create Member 
router.post('/', async (req, res) => {
    try {
        const newMember = req.body;
        const response = await membersBLL.createMembers(newMember);
        if(response) {
            res.send(response)
        }else{
            res.send(error)
        }
    } catch (error) {
        res.send(error);
    };
});

// Update Member
router.put('/:id', async (req, res) => {
    try {
        const response = await membersBLL.updateMember(req.params.id ,req.body)
        res.send(response)
    } catch (error) {
        res.send(err);
    };
});


//Delete Member
router.delete('/:id', async (req, res) => {
    try {
        const response = await membersBLL.deleteMember(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

module.exports  = router;