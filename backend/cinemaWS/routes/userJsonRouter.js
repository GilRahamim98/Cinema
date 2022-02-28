const express = require('express');
const userJsonBLL = require('../BLL/usersJsonBLL')

const router = express.Router();

//Gets all UsersJson
router.get('/', async (req, res) => {
    try {
        const response = await userJsonBLL.getUsers();
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Gets UserJson by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await userJsonBLL.getUserById(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Create UserJson
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        const response = await userJsonBLL.createUser(newUser);
        if(response) {
            res.send(response.data)
        }else{
            res.send(error)
        }
    } catch (error) {
        res.send(error);
    };
});

//Update UserJson
router.put('/:id', async (req, res) => {
    try {
        const response = await userJsonBLL.updateUser(req.params.id ,req.body)
        res.send(response)
    } catch (error) {
        res.send(err);
    };
});


//Delete UserJson
router.delete('/:id', async (req, res) => {
    try {
        const response = await userJsonBLL.deleteUser(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});




module.exports  = router;
