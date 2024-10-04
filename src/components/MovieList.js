import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
   
  return (
    <div className="px-6 mb-2">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll" style = {{scrollbarWidth: "none"}}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie = {movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
