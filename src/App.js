import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import MovieFilter from './MovieFilter';
import AddMovieForm from './AddMovieForm';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un thriller captivant de Christopher Nolan.",
      posterUrl: "https://m.media-amazon.com/images/I/51s+O8xqXvL._AC_SY445_.jpgn",
      rating: 4.8
    },
    {
      title: "Interstellar",
      description: "Un voyage épique à travers l'espace et le temps.",
      posterUrl: "https://m.media-amazon.com/images/I/71n64V7MtXL._AC_SY679_.jpg",
      rating: 4.6
    },
    {
      title: "Avengers: Endgame",
      description: "Le combat final des héros pour sauver l'univers.",
      posterUrl: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
      rating: 4.5
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">🎬 Ma bibliothèque de films</h1>
      <MovieFilter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <AddMovieForm onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
