import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    btn: {
        border: '1px solid black',
        width: '100px',
        padding: '8px',
        textDecoration: 'none',
        marginBottom: '10px'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
}));
