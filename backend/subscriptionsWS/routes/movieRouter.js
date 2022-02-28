const express = require('express');
const moviesBLL = require('../BLL/moviesBLL');

const router = express.Router();

//Gets all Movies
router.get('/', async (req, res) => {
    try {
        const response = await moviesBLL.getAllMovies();
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Gets Movie by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await moviesBLL.getMovieByID(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

//Create Movie bro
router.post('/', async (req, res) => {
    try {
        const newMovie = req.body;
        const response = await moviesBLL.createMovie(newMovie);
        if(response) {
            res.send(response)
        }else{
            res.send(error)
        }
    } catch (error) {
        res.send(error);
    };
});

//Update Movie
router.put('/:id', async (req, res) => {
    try {
        const response = await moviesBLL.updateMovie(req.params.id ,req.body)
        res.send(response)
    } catch (error) {
        res.send(err);
    };
});


//Delete movie
router.delete('/:id', async (req, res) => {
    try {
        const response = await moviesBLL.deleteMovie(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error);
    };
});

module.exports  = router;