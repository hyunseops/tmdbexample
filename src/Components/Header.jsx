import './Header.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Header = () => {

  return (
    <div className="header">
      <Button style ={{height:50 ,variant:"text"}}>Text</Button>
      <Button variant="contained">Contained</Button>

    </div>
  )
}

export default Header