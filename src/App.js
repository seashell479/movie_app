import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        setMovies(movies.data.data.movies); // 20개 배열 데이터
        setIsLoading(false);
      } catch (errer) {
        console.log("네트워크가 이상함!!")
      }
    }
    getMovies();
  }, [])
  
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
            );
          })}
        </div>
      )} 
      {/* 로딩중이 true이고 완료가 false임 */}
    </section>
  );
}

export default App;
