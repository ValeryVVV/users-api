import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { FilterBox, FilterText, FilterFlexBox } from "./FilterUserStyles";


const FilterUserName = ({ value, onChange }) => {

    return (
        <FilterBox>
            <FilterFlexBox>
                <FilterText>Filter by user name</FilterText>
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
            </FilterFlexBox>
        </FilterBox>
    )
};

export default FilterUserName;