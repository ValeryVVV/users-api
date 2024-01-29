import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    container: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
    },
    text: {
        fontWeight: 600,
        fontSize: '16px',
    },
}));
