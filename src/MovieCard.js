import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img src={movie.poster} className="card-img-top" alt={movie.title} style={{ height: "300px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">Note : {movie.rating}/10</p>
        </div>
        <Link to={`/film/${movie.id}`} className="btn btn-primary mt-2">Voir Détails</Link>
      </div>
    </div>
  );
}

export default MovieCard;
