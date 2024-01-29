import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const ButtonStyled = styled(Button)({
    '&.MuiButton-root': {
            paddingLeft: '10px',
            paddingRight: '10px',
            border: '1px solid #c1bfbf',
            textTransform: 'capitalize',
            color: '#000000'
        }
});
