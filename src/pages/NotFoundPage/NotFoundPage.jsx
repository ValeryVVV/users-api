import React from "react"
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import { Wrapper, ButtonStyled } from "./NotFoundStyles";


export default function NotFound() {
    const navigate = useNavigate();

    const handleSubmit = async values => {
          navigate("/", { replace: false });
    }
    return (
        <Wrapper>
            <Typography variant="h2">404 Not Found</Typography>
            <ButtonStyled type="button" onClick={handleSubmit}>
                Go home
            </ButtonStyled>
        </Wrapper>
    );
};
