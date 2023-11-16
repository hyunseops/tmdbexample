import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

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
    <div style={{display:'flex'}}>
      {movie ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img> : null}
      <div>
        <br/><br/>
      <Typography variant="h3" gutterBottom style={{padding:20}}><span>{movie? movie.title : null}</span></Typography>
        <span style={{padding:20}}>개봉일 : {movie? movie.release_date : null}</span>
        <span>  상영시간 : {movie? movie.runtime : null}m</span><br/><br/>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color="primary" aria-label="List">
           <ListIcon />
          </Fab>
          <Fab color="primary" aria-label="add">
           <AddIcon />
          </Fab>
          <Fab color="primary" aria-label="star">
            <StarIcon />
          </Fab>
          <Fab color="primary" aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Box>
        
        <Rating style ={{padding:20}}name="read-only" value={movie? movie.vote_average/2 : null} readOnly /><br/>
        <span style={{padding:20}}>{movie? movie.tagline : null}</span><br/><br/>
        <Typography style={{padding:20}} variant="h6" gutterBottom>개요</Typography>
        <span style={{padding:20}}>{movie? movie.overview : null}</span><br/>
        

      </div>
    </div>
  )
}

export default MovieDetail