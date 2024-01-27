import React, { Suspense, useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { getUserDetails } from "../../api/user-api";
import PostDetails from "../PostDetails/PostDetailsPage";
import AlbumDetails from "../AlbumDetails/AlbumDetailsPage";

const UserDetails = () => {
    // const [movie, setMovie] = useState([]);

    // const { movieId } = useParams();
    const location = useLocation();


    //   useEffect(() => {
    // if (!movieId) return;
    // const getMoviesDetails = async id => {
    //   try {
    //     const receivedDetails = await getUserDetails(id);
    //     setMovie(receivedDetails);
    //   } catch (err) {
    //    console.log(err);
    //   }
    // };
    // getMoviesDetails(movieId);
    //   }, [movieId]);
    
    const backLink = location.state?.from ?? "/";

    return (
        <>
            <div>
                
                <Link
                    style={{ textDecoration: 'none' }}
                    state={{ from: location?.state?.from ?? '/' }}
                    to="posts"
                >
                    Post
                </Link>

                                <Link
                    style={{ textDecoration: 'none' }}
                    state={{ from: location?.state?.from ?? '/' }}
                    to="albums"
                >
                    Albums
                </Link>
            </div>
            
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