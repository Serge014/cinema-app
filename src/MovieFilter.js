function MovieFilter({ setFilterTitle, setFilterRating }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Rechercher un film..."
        className="form-control mb-2"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        className="form-control"
        placeholder="Note minimale"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
}

export default MovieFilter;
