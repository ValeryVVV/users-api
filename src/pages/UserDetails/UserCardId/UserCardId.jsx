import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CardMedia, Grid, Typography } from "@mui/material";

import { ContainerStyled, CardStyled, CardContentStyled, Title, TextInfo, CardActionStyled, ButtonStyled } from "../../../styles/CardStyles/CardStyles";

const UsersCardId = ({ user }) => {
    const location = useLocation();

    const { id, name, phone, website } = user;
        return (
            <ContainerStyled maxWidth="sm">
                <Grid container spacing={4}>
                    <Grid item key={id} xs={14} sm={12} md={10}>
                        <CardStyled>
                            <CardMedia
                                component="div"
                                sx={{ pt: '56.25%' }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                                <CardContentStyled>
                                    <Title variant='h5'>Additional information</Title>
                                    <Typography><TextInfo>Id: </TextInfo> {id}</Typography>
                                    <Typography><TextInfo>Name: </TextInfo> {name}</Typography>
                                    <Typography><TextInfo>Phone: </TextInfo> {phone}</Typography>
                                    <Typography><TextInfo>Website: </TextInfo> {website}</Typography>
                                </CardContentStyled>
                        <CardActionStyled>
                            <Link to='posts' state={{ from: location?.state?.from ?? '/' }}><ButtonStyled size="small">Post</ButtonStyled></Link>
                            <Link to='albums' state={{ from: location?.state?.from ?? '/' }}><ButtonStyled size="small">Album</ButtonStyled></Link>
                        </CardActionStyled>
                        </CardStyled>
                    </Grid>
                    </Grid>
            </ContainerStyled>
        )
    };

export default UsersCardId;
