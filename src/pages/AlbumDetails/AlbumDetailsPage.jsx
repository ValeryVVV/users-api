import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

import { getAlbumDetails } from "../../api/user-api";

const AlbumDetails = () => {
    const [album, setAlbums] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
    if (!userId) return;
    const getAlbumsDetail = async id => {
        const receivedDetails = await getAlbumDetails(id);
        setAlbums(receivedDetails);
    };
    getAlbumsDetail(userId);
      }, [userId]);
    

    return (
        <>
            
        {!album ? (
                <div>This album is not found</div>
            ) : (
                <Box sx={{ m: 3 }}>
                    {album.map((data) => (
                    <List sx={{ width: '100%' }} key={data.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Typography component="span" sx={{ fontWeight: 600}}>Title:</Typography> {data.title}
                                </Typography>
                            </>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                    ))}

                </Box>
            )}
        </>
    )
};

export default AlbumDetails;