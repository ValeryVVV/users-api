import React, { Suspense, useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { getUserDetails } from "../../api/user-api";
import PostDetails from "../PostDetails/PostDetailsPage";
import AlbumDetails from "../AlbumDetails/AlbumDetailsPage";
import UsersCardId from "./UserCardId/UserCardId";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UserDetails = () => {
    const [user, setUser] = useState([]);

    const { userId } = useParams();
    const location = useLocation();


    useEffect(() => {
    if (!userId) return;
    const getUsersDetails = async id => {
        const receivedDetails = await getUserDetails(id);
        setUser(receivedDetails);
    };
    getUsersDetails(userId);
    }, [userId]);
    
    const backLink = location.state?.from ?? "/";

    return (
        <>
        {!user ? (
            <Typography variant="h1">This user is not found</Typography>
        ) : (
            <>
            <Link to={backLink}><Button sx={{ml: 6, mt: 3 }} startIcon={<ArrowBackIcon />}>Go back</Button></Link>
            <UsersCardId user={user} />
            </>
        )}
            
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="posts" element={<PostDetails />} />
                <Route path="albums" element={<AlbumDetails />} />
            </Routes>
        </Suspense>
        </>
    )
};

export default UserDetails;
