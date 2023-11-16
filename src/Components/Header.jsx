import './Header.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Header = () => {

  return (
    <div className="header">
      <Button style ={{height:60 ,color:"white",variant:"text"}}>영화</Button>
      <Button style ={{height:60 ,color:"white",variant:"text"}}>TV프로그램</Button>
      <Button style ={{height:60 ,color:"white",variant:"text"}}>인물</Button>
      <Button style ={{height:60 ,color:"white",variant:"text"}}>More</Button>
      

    </div>
  )
}

export default Header