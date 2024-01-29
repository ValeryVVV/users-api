import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    navBar: {
        borderBottom: '1px solid #ECECEC',
        backgroundColor: '#ffffff',
        boxShadow: 'none'
    },
    headerNav: {
        display: 'block',
        paddingLeft: '30px',
        '&:not(:last-child)': {
            marginRight: '50px'
        }
    },
    headerNavLink: {
        display: 'block',
        paddingTop: '32px',
        paddingBottom: '32px',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '1.14',
        letterSpacing: '0.02em',
        position: 'relative',

        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        color: '#212121',
    
        '&:hover, &:focus': {
            color: '#2196f3',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    link: {
        textDecoration: 'none'
    },
    current: {
        color: '#2196f3',

        '&::before': {
            content: '""',
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '4px',
            borderRadius: '2px',
            bottom: '-1px',
            backgroundColor: '#2196f3'
        },
    },
    logo: {
        fontFamily: "Raleway",
        fontWeight: '700',
        fontSize: '26px',
        lineHeight: '1.19',
        color: '#2196F3',
        paddingLeft: '15px'
    },
    logoBlack: {
        color: '#000000',
        alignItems: 'center'
    },

}));
