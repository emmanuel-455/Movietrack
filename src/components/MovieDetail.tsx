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
    <div className="p-6">
      <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-[50vh] object-cover"
          />
        )}
        <div className="p-4 w-full">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-2">Release Date: {movie.release_date}</p>
          <p className="text-lg mb-2">Popularity: {movie.popularity}</p>
          <p className="text-lg">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
