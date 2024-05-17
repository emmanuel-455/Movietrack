import React from 'react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  popularity: number;
  backdrop_path: string;
}

interface HeaderProps {
  movies: Movie[];
}

const Header: React.FC<HeaderProps> = ({ movies }) => (
  <header className="relative w-full md:h-[40vh] flex justify-center items-center">
    {movies.length > 0 && movies[0].backdrop_path && (
      <div className="relative md:w-[80%] h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies[0].backdrop_path}`}
          alt={movies[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <h1 className="absolute top-[80%] left-5 underline text-white font-bold md:text-3xl text-2xl">
            {movies[0].title}
          </h1>
        </div>
      </div>
    )}
  </header>
);

export default Header;