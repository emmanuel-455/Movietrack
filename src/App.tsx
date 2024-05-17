import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  popularity: number;
  backdrop_path: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const apikey = 'f336d0c891ed1268ac0a9820cc7c08ff';
  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios
      .get(popularUrl)
      .then((response) => {
        const results = response.data.results;
        console.table(results);
        setMovies(results);
      })
      .catch((error) => {
        console.error('Error fetching the movies:', error);
      });
  };

  return (
    <Router>
      <Header movies={movies} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
