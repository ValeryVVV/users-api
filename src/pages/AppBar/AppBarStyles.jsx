import { Toolbar } from '@mui/material';

import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const NavBar = styled(Toolbar)({
    borderBottom: '1px solid #ECECEC',
    backgroundColor: '#ffffff',
    boxShadow: 'none'
});

export const HeaderNav = styled('div')({
    display: 'block',
    paddingLeft: '30px',
    '&:not(:last-child)': {
        marginRight: '50px'
    }
});

export const LogoLink = styled(Link)({
    fontFamily: "Raleway",
    fontWeight: '700',
    fontSize: '26px',
    lineHeight: '1.19',
     color: '#2196F3',
    paddingLeft: '15px',
    textDecoration: 'none'
});

export const Logo = styled('span')({
    fontFamily: "Raleway",
    fontWeight: '700',
    fontSize: '26px',
    lineHeight: '1.19',
    color: '#2196F3',
    paddingLeft: '15px'
});

export const LogoColor = styled('span')({
    color: '#000000',
    alignItems: 'center'
});

export const HeaderNavLink = styled(Link)({
    display: 'block',
    paddingTop: '32px',
    paddingBottom: '32px',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '1.14',
    letterSpacing: '0.02em',
    position: 'relative',
    textDecoration: 'none',

    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    
    '&:hover, &:focus': {
        color: '#2196f3',
        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    color: '#2196f3',

    '&::before': {
        content: '""',
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '4px',
        borderRadius: '2px',
        bottom: '-1px',
        backgroundColor: '#2196f3',
    }
});
