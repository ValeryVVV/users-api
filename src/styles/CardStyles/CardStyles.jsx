import { makeStyles } from '@mui/styles';

export const useCardStyles = makeStyles(({
    container: {
        margin: '30px'
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
    linkWrap: {
        marginLeft: '10px',
        marginBottom: '10px'
    },
    button: {
        '&.MuiButton-root': {
            border: '1px solid #2196f3',
        }
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        '&.MuiCardActions-root': {
            paddingBottom: '15px',
        }
    }

}));
