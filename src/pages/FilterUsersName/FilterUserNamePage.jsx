import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useStyles } from "./FilterUserStyles";


const FilterUserName = ({ value, onChange }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.flex}>
                <Typography className={classes.text}>Filter by user name</Typography>
                <TextField
                    size="small"
                    variant="outlined"
                    type='text'
                    value={value}
                    onChange={onChange}
                    InputProps={{ 
                        startAdornment: <SearchIcon sx={{ pr: 1}}  position="start" />,
                    }}
                />
            </Box>
        </Box>
    )
};

export default FilterUserName;