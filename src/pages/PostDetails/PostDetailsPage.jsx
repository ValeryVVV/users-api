import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

import { getPostIdDetails } from "../../api/user-api";

const PostDetails = () => {
    const [post, setPost] = useState([]);

    const { userId } = useParams();


      useEffect(() => {
    if (!userId) return;
    const getPostDetails = async id => {
        const receivedDetails = await getPostIdDetails(id);
        setPost(receivedDetails);
    };
    getPostDetails(userId);
    }, [userId]);
    

    return (
        <>
            
            {!post ? (
                <div>This post is not found</div>
            ) : (
                <Box sx={{ m: 3 }}>
                    {post.map((pos) => (
                    <List sx={{ width: '100%' }} key={pos.id}>
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
                                    <Typography component="span" sx={{ fontWeight: 600}}>Title:</Typography> {pos.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Typography component="span" sx={{ fontWeight: 600}}>Body:</Typography>  {pos.body}
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

export default PostDetails;
