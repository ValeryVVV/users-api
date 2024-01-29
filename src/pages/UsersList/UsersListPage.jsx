import React from "react";
import { CardActions, CardMedia, Grid, Typography } from "@mui/material";

import { Title, CardStyled, CardContentStyled, TextInfo, LinkStyled } from "../../styles/CardStyles/CardStyles";

const UsersList = ({ users }) => {

        return (
            <>
                <Grid container spacing={4}>
                    {users.map(({ id, username, email }) => (
                    <Grid item key={id} xs={12} sm={6} md={4}>
                        <CardStyled>
                            <CardMedia
                                component="div"
                                sx={{
                                pt: '56.25%',
                                }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                                <CardContentStyled>
                                    <Title variant='h5'>User Info</Title>
                                    <Typography><TextInfo>Id: </TextInfo> {id}</Typography>
                                    <Typography><TextInfo>User Name: </TextInfo> {username}</Typography>
                                    <Typography><TextInfo>Email: </TextInfo> {email}</Typography>
                                </CardContentStyled>
                        <CardActions>
                            <LinkStyled to={`/users/${id}`}>View more details</LinkStyled>
                        </CardActions>
                        </CardStyled>
                    </Grid>
                    ))}
                </Grid>
        </>
        )
    };


export default UsersList;
