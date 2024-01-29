import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';

import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const ContainerStyled = styled(Container)({
    margin: '30px',
    '&.MuiContainer-root': {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
});

export const GridContainer = styled(Grid)({
    '&.MuiGrid-root': {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
    
});

export const Title = styled(Typography)({
    textAlign: 'center'
});

export const HeaderNav = styled(Typography)({
    display: 'block',
    paddingLeft: '30px',
    '&:not(:last-child)': {
        marginRight: '50px'
    }
});

export const CardStyled = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
});

export const CardContentStyled = styled(CardContent)({
    flexGrow: 1
});

export const TextInfo = styled('span')({
    fontWeight: '700',
    fontSize: '16px',
});

export const LinkStyled = styled(Link)({
    color: '#2196f3',
    marginLeft: '10px',
    marginBottom: '10px'
});

export const CardActionStyled = styled(CardActions)({
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    '&.MuiCardActions-root': {
        paddingBottom: '15px',
    }
});

export const ButtonStyled = styled(Button)({
    '&.MuiButton-root': {
        border: '1px solid #2196f3',
    }
});
