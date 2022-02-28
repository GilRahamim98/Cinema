const express = require('express');
const userBLL = require('../BLL/userBLL')

const router = express.Router();

//Gets all User
router.get('/', async (req, res) => {
    try {
        const response = await userBLL.getAllUser();
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Gets User by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await userBLL.getUserByID(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Create User
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        const response = await userBLL.createUser(newUser);
        if(response) {
            res.send(response._id)
        }else{
            res.send(error)
        }
    } catch (error) {
        res.send(error);
    };
});

//Update User
router.put('/:id', async (req, res) => {
    try {
        const response = await userBLL.updateUser(req.params.id ,req.body)
        res.send(response)
    } catch (error) {
        res.send(err);
    };
});


//Delete User
router.delete('/:id', async (req, res) => {
    try {
        const response = await userBLL.deleteUser(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});





module.exports  = router;
