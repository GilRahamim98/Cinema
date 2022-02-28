const express = require('express');
const subBLL = require('../BLL/subscriptionsBLL');

const router = express.Router();

//Gets all Subs
router.get('/', async (req, res) => {
    try {
        const response = await subBLL.getAllSub();
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Gets Sub by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await subBLL.getSubByID(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Create Sub bro
router.post('/', async (req, res) => {
    try {
        const newSub = req.body;
        const response = await subBLL.createSub(newSub);
        if(response) {
            res.send(response)
        }else{
            res.send(error)
        }
    } catch (error) {
        res.send(error);
    };
});

//Update Sub
router.put('/:id', async (req, res) => {
    try {
        const response = await subBLL.updateSub(req.params.id ,req.body)
        res.send(response)
    } catch (error) {
        res.send(err);
    };
});


//Delete Sub
router.delete('/:id', async (req, res) => {
    try {
        const response = await subBLL.deleteSub(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

module.exports  = router;