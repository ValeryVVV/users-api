import * as React from 'react';
import { makeStyles } from '@mui/styles';

export const useCardStyles = makeStyles(({
    container: {
        margin: '50px'
    },
    title: {
        textAlign: 'center'
    },
    headerNav: {
        display: 'block',
        paddingLeft: '30px',
        '&:not(:last-child)': {
            marginRight: '50px'
        }
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardContent: {
        flexGrow: 1
    },
    textInfo: {
        fontWeight: '700',
        fontSize: '16px',
    },
    link: {
        color: '#2196f3'
    },
    button: {
        '&.MuiButton-root': {
            border: '1px solid #2196f3',
        }
    }

}));
