const express = require('express');
const permissionJsonBLL = require('../BLL/permissionsJsonBLL')

const router = express.Router();

//Gets all PermissionsJson
router.get('/', async (req, res) => {
    try {
        const response = await permissionJsonBLL.getPermissions();
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Gets PermissionsJson by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await permissionJsonBLL.getPermissonsById(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Create PermissionsJson
router.post('/', async (req, res) => {
    try {
        const newPermissions = req.body;
        const response = await permissionJsonBLL.createPermission(newPermissions);
        if(response) {
            res.send(response)
        }else{
            res.send(error)
        }
    } catch (error) {
        res.send(error);
    };
});

//Update PermissionsJson
router.put('/:id', async (req, res) => {
    try {
        const response = await permissionJsonBLL.updatePermission(req.params.id ,req.body)
        res.send(response)
    } catch (error) {
        res.send(err);
    };
});


//Delete PermissionsJson
router.delete('/:id', async (req, res) => {
    try {
        const response = await permissionJsonBLL.deletePermission(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});




module.exports  = router;
