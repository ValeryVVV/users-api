import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const UsersList = ({ users }) => {
        return (
            <>
                <Grid container spacing={4}>
                    {users.map((user) => (
                    <Grid item key={user.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="div"
                                sx={{
                                pt: '56.25%',
                                }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography sx={{ textAlign: 'center' }}>User Info:</Typography>
                                     <Typography>Id: {user.id}</Typography>
                                <Typography>Name: {user.name}</Typography>
                                    <Typography>User Name: {user.username}</Typography>
                                    <Typography>Email: {user.email}</Typography>
                            </CardContent>
                        <CardActions>
                            <Link to={`${user.id}`}>View more details</Link>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
        </>
        )
    };


export default UsersList;