import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddMovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterUrl || !rating) {
      alert('Remplissez tous les champs !');
      return;
    }
    if (rating < 0 || rating > 5) {
      alert('La note doit être entre 0 et 5');
      return;
    }
    onAdd({
      title,
      description,
      posterUrl,
      rating: parseFloat(rating),
    });
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="URL affiche"
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          placeholder="Note (0-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="5"
          step="0.1"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ajouter un film
      </Button>
    </Form>
  );
};

export default AddMovieForm;
