import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { useCardStyles } from "../../styles/CardStyles/CardStyles";

const UsersList = ({ users }) => {

    const classes = useCardStyles();
        return (
            <>
                <Grid container spacing={4}>
                    {users.map(({ id, username, email }) => (
                    <Grid item key={id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                component="div"
                                sx={{
                                pt: '56.25%',
                                }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h5' className={classes.title}>User Info</Typography>
                                    <Typography><Box component="span" className={classes.textInfo}>Id: </Box> {id}</Typography>
                                    <Typography><Box component="span" className={classes.textInfo}>User Name: </Box> {username}</Typography>
                                    <Typography><Box component="span" className={classes.textInfo}>Email: </Box> {email}</Typography>
                            </CardContent>
                        <CardActions>
                            <Link className={`${classes.linkWrap} ${classes.link}`} to={`/users/${id}`}>View more details</Link>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
        </>
        )
    };


export default UsersList;
