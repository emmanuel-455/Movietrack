import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  popularity: number;
  backdrop_path: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movies-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
          <div className="movie-card flex text-white overflow-hidden shadow-lg">
            <div className="w-[150px] h-[150px] flex-shrink-0">
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-sm mb-2">Release Date: {movie.release_date}</p>
              <p className="text-sm line-clamp-2">{movie.overview}</p>
              <p className="text-sm mb-2">Popularity: {movie.popularity}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
