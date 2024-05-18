import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

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
    <>
      <Header movies={movies} />
      <div className="movies-container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-3 md:p-[100px]">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
          <div className="movie-card md:w-[80%] flex text-white overflow-hidden shadow-lg">
            <div className="md:w-[150px] md:h-[150px]
            flex-shrink-0 w-[100px] h-[100px]">
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="pl-4 md:pt-1">
              <h2 className="text-[17px] md:text-xl font-bold mb-[2px]">{movie.title}</h2>
              <p className="text-xs italic text-gray-400 mb-1">Release Date: {movie.release_date}</p>
              <p title={movie.overview} className="text-[12px] line-clamp-2">{movie.overview}</p>
              <p className="text-xs mt-2">Popularity: {movie.popularity}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default MovieList;
