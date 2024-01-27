import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumDetails } from "../../api/user-api";

const AlbumDetails = () => {
    const [album, setAlbums] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
    if (!movieId) return;
    const getMoviesDetails = async id => {
        const receivedDetails = await getAlbumDetails(id);
        setAlbums(receivedDetails);
    };
    getMoviesDetails(movieId);
      }, [movieId]);
    

    return (
        <>
            
            {!album ? (
                <div>This movie is not found</div>
            ) : (
                <>
                    <ul key={album.id}>
                        <li>
                            <p>{album.id}</p>
                            <p>{album.title}</p>
                        </li>
                    </ul>
                </>
            )}
        </>
    )

};

export default AlbumDetails;