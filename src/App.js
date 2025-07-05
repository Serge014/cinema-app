import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MovieFilter from './MovieFilter';
import AddMovieForm from './AddMovieForm';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "Un voleur qui infiltre les rêves pour voler des secrets.",
      trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
      poster: "/1122037.jpg",
      rating: 9,
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Un voyage épique au-delà des étoiles pour sauver l'humanité.",
      trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: 8,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Router>
      <Container className="my-4">
        <h1 className="mb-4 text-center">🎬 Ma bibliothèque de films</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MovieFilter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
                <AddMovieForm onAdd={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/film/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
