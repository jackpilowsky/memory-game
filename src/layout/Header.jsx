import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Header(props) {
    const {
        restart
    } = props
    return (
      <Box sx={{ 
          flexGrow: 1,
          marginBottom: 3
      }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Memory Game
            </Typography>
            <Button color="inherit" onClick={restart}>Start Over</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }