import { useState } from 'react';

function AddMovieForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    trailerUrl: '',
    poster: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'rating' ? Number(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ title: '', description: '', trailerUrl: '', poster: '', rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col-md-3">
          <input name="title" value={formData.title} onChange={handleChange} className="form-control" placeholder="Titre" required />
        </div>
        <div className="col-md-3">
          <input name="poster" value={formData.poster} onChange={handleChange} className="form-control" placeholder="URL de l'affiche" required />
        </div>
        <div className="col-md-2">
          <input name="trailerUrl" value={formData.trailerUrl} onChange={handleChange} className="form-control" placeholder="URL de la bande-annonce" required />
        </div>
        <div className="col-md-2">
          <input name="rating" value={formData.rating} onChange={handleChange} className="form-control" type="number" min="0" max="10" placeholder="Note" required />
        </div>
        <div className="col-md-12 mt-2">
          <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" placeholder="Description" required />
        </div>
        <div className="col-md-12 mt-2">
          <button type="submit" className="btn btn-success w-100">Ajouter un film</button>
        </div>
      </div>
    </form>
  );
}

export default AddMovieForm;
