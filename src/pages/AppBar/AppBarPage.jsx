import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import { NavBar, HeaderNav, HeaderNavLink, LogoLink, LogoColor, Logo } from './AppBarStyles.jsx';



function AppBarPage() {
  return (
    <AppBar position="relative" elevation={0}>
          <NavBar>
            <LogoLink to="/">
                <Logo>User</Logo>
                <LogoColor>Info</LogoColor>
              </LogoLink>
              
              <HeaderNav>
                  <HeaderNavLink to="/">Home</HeaderNavLink>
              </HeaderNav>
        </NavBar>
    </AppBar>
  );
}

export default AppBarPage;
