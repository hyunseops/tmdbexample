import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const param = useParams()
  const [movie, setMovie] = useState()

  
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${param.movieId}`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ4ZjExMGM0YmEyNDAzZTI1ODFmMjMxNmYxZmE4NyIsInN1YiI6IjY1M2M1ZWMwZTg5NGE2MDBlMmNkNjI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mHBJqkiDMg5wzyX9WMjGu6jZ2BM0z9jskGYcQOIbdAM' // Replace with your actual API key
      }
    })
      .then((res) => {
        setMovie(res.data)
        console.log(res)
      });
  }, []);

  return (
    <div>
      {movie ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img> : null}
      <span>{movie? movie.title : null}</span>
    </div>
  )
}

export default MovieDetail