import React from "react"
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import { useStyles } from "./NotFoundStyles";


export default function NotFound() {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = async values => {
          navigate("/", { replace: false });
    }
    return (
        <Box className={classes.wrapper}>
            <Typography variant="h2">404 Not Found</Typography>
            <Button className={classes.btn} type="button" onClick={handleSubmit}>
                Go home
            </Button>
        </Box>
    );
}