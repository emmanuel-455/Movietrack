import React from 'react';
import { useParams } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  popularity: number;
  backdrop_path: string;
}

interface MovieDetailProps {
  movies: Movie[];
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movies }) => {
  const { id } = useParams<{ id: string }>();
  const movieId = id ? parseInt(id) : null;
  const movie = movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="md:px-[150px]">
      <div className="flex flex-col items-center text-white overflow-hidden bg-[#505050] shadow-lg">
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full sm:h-[30vh] md:h-[40vh] object-cover"
          />
        )}
        <div className="p-4 w-full">
          <h1 className="text-[20px] md:text-3xl font-bold mb-1">{movie.title}</h1>
          <p className="text-base md:text-sm mb-2 text-gray-400 italic">Release Date: {movie.release_date}</p>
          <p className="text-[16px] mb-3">{movie.overview}</p>
          <p className="text-base mb-2">Popularity: {movie.popularity}</p>
          <button className='px-4 py-2 mt-3 bg-[#7ba875] text-white font-medium'>
          <a href={`https://www.awafim.tv/browse?q=${movie.title}`}>Download Here</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
