import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import './TrendingList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TrendingList = () => {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ4ZjExMGM0YmEyNDAzZTI1ODFmMjMxNmYxZmE4NyIsInN1YiI6IjY1M2M1ZWMwZTg5NGE2MDBlMmNkNjI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mHBJqkiDMg5wzyX9WMjGu6jZ2BM0z9jskGYcQOIbdAM' // Replace with your actual API key
      }
    })
      .then((res) => {
        console.log(res)
        setMovieList(res.data.results.slice(0, 8));
      });
  }, []);

  return (
    <div className='trending-container'>
      {movieList ? movieList.map((movie) => (
        <Card key={movie.id} sx={{ maxWidth: 345, boxShadow: 10 }} >
          <CardMedia
            sx={{ height: 140 }}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={() => navigate(`/${movie.id}`)}>Learn More</Button>
          </CardActions>
        </Card>
      )) : <span>null</span>}
    </div>
  );
};

export default TrendingList;
