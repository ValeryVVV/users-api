import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

import { useCardStyles } from "../../../styles/CardStyles/CardStyles";

const UsersCardId = ({ user }) => {

    const classes = useCardStyles();
    const location = useLocation();
        return (
            <Container className={classes.container} maxWidth="sm">
                <Grid container spacing={4}>
                    <Grid item key={user.id} xs={14} sm={12} md={10}>
                        <Card className={classes.card}>
                            <CardMedia
                                component="div"
                                sx={{ pt: '56.25%' }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h5' className={classes.title}>Additional information</Typography>
                                    <Typography><Box component="span" className={classes.textInfo}>Id:</Box> {user.id}</Typography>
                                    <Typography><Box component="span" className={classes.textInfo}>Name:</Box> {user.name}</Typography>
                                    <Typography><Box component="span" className={classes.textInfo}>Phone:</Box> {user.phone}</Typography>
                                    <Typography><Box component="span" className={classes.textInfo}>website:</Box> {user.website}</Typography>
                            </CardContent>
                        <CardActions>
                            <Link to='posts' state={{ from: location?.state?.from ?? '/' }}><Button className={classes.button} size="small">Post</Button></Link>
                            <Link to='albums' state={{ from: location?.state?.from ?? '/' }}><Button className={classes.button} size="small">Album</Button></Link>
                        </CardActions>
                        </Card>
                    </Grid>
                    </Grid>
            </Container>
        )
    };

export default UsersCardId;
