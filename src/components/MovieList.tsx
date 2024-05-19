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
      <div className='p-3 sm:px-full md:px-[150px] py-[50px]'>
        <h1 className='text-xl text-[white] font-semibold mb-5'>Popular Movies</h1>
      <div className="movies-container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
          <div className="movie-card bg-[#505050] mb-5 md:w-[100%] flex  overflow-hidden shadow-lg">
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
              <h2 className="text-[17px] md:text-xl font-bold mb-[2px] text-[#e2e2e2]">{movie.title}</h2>
              <p className="text-xs font-semibold italic text-[#9c9c9c] mb-1">Release Date: {movie.release_date}</p>
              <p title={movie.overview} className="text-[15px] line-clamp-2 text-[#d4d4d4] font-semibold">{movie.overview}</p>
              <p className="text-xs text-[#fdfdfd] mb-2">Popularity: {movie.popularity}</p>
              <p className='text-right font-bold text-white mr-2 mb-2 text-base'>View Details</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
      </div>
    </>
  );
};

export default MovieList;
