import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) return <p>Aucun film trouvé.</p>;

  return (
    <Row>
      {movies.map((movie, idx) => (
        <Col key={idx} md={4} className="mb-4">
          <MovieCard {...movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;

