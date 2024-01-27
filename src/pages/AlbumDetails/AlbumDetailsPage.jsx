import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumDetails } from "../../api/user-api";

const AlbumDetails = () => {
    const [album, setAlbums] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
    if (!userId) return;
    const getMoviesDetails = async id => {
        const receivedDetails = await getAlbumDetails(id);
        setAlbums(receivedDetails);
    };
    getMoviesDetails(userId);
      }, [userId]);
    

    return (
        <>
            
        {!album ? (
                <div>This movie is not found</div>
            ) : (
                    <>
                        {album.map((d) => (
                            <ul key={d.id}>
                                <li>
                                    <p>{d.title}</p>
                                </li>
                            </ul>
                        ))}
                </>
            )}
        </>
    )

};

export default AlbumDetails;