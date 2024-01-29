import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const FilterBox = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start'
});

export const FilterFlexBox = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
});

export const FilterText = styled(Typography)({
    fontWeight: 500,
    fontSize: '16px',
});
