import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';

import { useStyles } from './AppBarStyles.jsx';



function AppBarPage() {
    const classes = useStyles();
  return (
    <AppBar position="relative" elevation={0}>
          <Toolbar className={classes.navBar} >
            <Link to="/" className={`${classes.logo} ${classes.link}`}>
                <Box component="span" className={classes.logo}>User</Box>
                <Box component="span" className={classes.logoBlack}>Info</Box>
              </Link>
              
              <Box className={classes.headerNav}>
                  <Link to="/" className={`${classes.headerNavLink} ${classes.link} ${classes.current}`}>Home</Link>
              </Box>
        </Toolbar>
    </AppBar>
  );
}

export default AppBarPage;