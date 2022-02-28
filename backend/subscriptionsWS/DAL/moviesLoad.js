const Axios = require("axios");

const loadMovies = async () => {
  const { data } = await Axios("https://api.tvmaze.com/shows");
  const movies = data.map((movie) => {
    return {
      name: movie.name,
      genres: movie.genres,
      image: movie.image.medium,
      premiered: movie.premiered
    };
  });
  return movies;
};

module.exports = loadMovies;
