import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>Film introuvable</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="ratio ratio-16x9 mb-3">
        <iframe
          src={movie.trailerUrl}
          title={movie.title}
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/" className="btn btn-secondary">← Retour à la liste</Link>
    </div>
  );
}

export default MovieDetails;
