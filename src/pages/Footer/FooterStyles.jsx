import * as React from 'react';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    footer: {
        textAlign: 'center',
        padding: '60px 0px',
        backgroundColor: '#2F303A'
    },
    container: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',

        '@media screen and (min-width: 480px)': {
            paddingLeft: '15px',
            paddingRight: '15px'
        },

        '@media screen and (min-width: 480px)': {
            width: '480px'
        },
        '@media screen and (min-width: 768px)': {
            width: '768px'
        },
        '@media screen and (min-width: 1200px)': {
            width: '1200px'
        },
    },
    footerFlex: {
        display: 'flex',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',

        '@media (min-width: 768px)': {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px 165px',
        },
        '@media (min-width: 1200px)': {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'left',
            gap: '70px',
        }
  },
    logo: {
        fontFamily: "Raleway",
        fontWeight: '700',
        fontSize: '26px',
        lineHeight: '1.19',
        color: '#2196F3',
        paddingLeft: '15px'
    },
    logoWhite: {
        color: '#ffffff',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none'
    },
    footerSubmit: {
        marginLeft: '93px'
    },
    footerSubmitText: {
        padding: '20px 0px 10px 0px',
        marginBottom: '20px',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '1.14px',
        textTransform: 'uppercase',
        color: '#ffffff',
    },  
    footerSubmitInput: {
        marginBottom: '20px',
        width: '100%',
        marginTop: '10px',
        padding: '13px 16px',
        borderRadius: '4px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backgroundColor: '#2f303a',
        color: '#ffffff',

        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '1.25',
            color: 'rgba(255, 255, 255, 0.6)'
        },
        '@media (min-width: 1200px)': {
            width: '358px',
            marginRight: '12px'
        },
    },
    footerSubmitBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',

        border: 'none',
        marginTop: '20px',
        padding: '8px 29px',
        borderRadius: '4px',

        backgroundColor: '#2196F3',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        color: '#ffffff',

        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '1.87',
        letterSpacing: '0.06em',

        cursor: 'pointer',
        minHeight: '43px',
        marginLeft: '12px',

        '@media (min-width: 1200px)': {
            marginTop: '0px'
        },
    },

}));
