import React from 'react';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ title, description, posterUrl, rating }) => {
  return (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={posterUrl} alt={title} style={{ height: 300, objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Note :</strong> {rating} / 5</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
