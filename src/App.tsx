import { useState, useEffect } from "react";
import axios from "axios";

interface Movies {
  id: number;
  title: string; 
  poster_path: string;
  release_date: string;
}

function App() {
  const [Movie, setMovie] = useState<Movies[]>([])

  const apikey = "f336d0c891ed1268ac0a9820cc7c08ff";
  const popular = "https://api.themoviedb.org/3/movie/popular"

  useEffect(() => {
    
      fetchMovie()
  
  }, []);

  const fetchMovie = () => {
    axios.get(`${popular}?api_key=${apikey}`).then((response) => {
      const results = response.data.results
      console.table(results)
      setMovie(results)
    })
  }

  return (
    <div>
      {Movie && Movie.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          )}
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  )
}

export default App
