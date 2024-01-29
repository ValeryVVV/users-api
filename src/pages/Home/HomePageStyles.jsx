import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    button: {
        '&.MuiButton-root': {
            paddingLeft: '10px',
            paddingRight: '10px',
            border: '1px solid #c1bfbf',
            textTransform: 'capitalize',
            color: '#000000'
        }
    }
}));
