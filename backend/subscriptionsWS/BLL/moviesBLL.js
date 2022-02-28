const Movie = require('../models/movieModel');
const loadMovies = require('../DAL/moviesLoad')


// USED  ONLY ON THE FIRST RUN
 const loadFirstTime = async() => {
    const movies = await loadMovies()
     movies.forEach(async(movie) => {
         await createMovie(movie).then(data => console.log(data)).catch(err => console.log(err));
     });
 }
// loadFirstTime()

//Get All Movies
const getAllMovies = () => {
    return new Promise ((resolve, reject) => {
        Movie.find({}, (err, cars) => {
            if(err) {
                reject(err);
            }else {
                resolve(cars)
            }
        });
    });
};

//Get by ID
const getMovieByID = (id) => {
    return new Promise ((resolve, reject) => {
        Movie.findById(id, (err, movie) => {
            if(err) {
                reject(err);
            }else {
                resolve(movie)
            }
        });
    });
}

//Create Movies
const createMovie = (obj) => {
    return new Promise ((reject, resolve) => {
        const newMovie = new Movie(obj);
        newMovie.save((err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Movie Created Successfully");
            };
        });
    });
}

// Update Movie
const updateMovie = (id, obj) => {
    return new Promise ((resolve, reject) => {
        Movie.findByIdAndUpdate(id, obj, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Updated Succsessfully")
            }
        });
    });
};

// Delete Movie
const deleteMovie = (id) => {
    return new Promise ((resolve, reject) => {
        Movie.findByIdAndDelete(id, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Deleted Successfully");
            };
        });
    });
};

module.exports = {
    getAllMovies,
    getMovieByID,
    createMovie,
    updateMovie,
    deleteMovie
}