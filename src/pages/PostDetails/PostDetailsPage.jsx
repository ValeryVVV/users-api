import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPostIdDetails } from "../../api/user-api";

const PostDetails = () => {
    const [data, setData] = useState([]);

    const { movieId } = useParams();


      useEffect(() => {
    if (!movieId) return;
    const getMoviesDetails = async id => {
      try {
        const receivedDetails = await getPostIdDetails(id);
        setData(receivedDetails);
      } catch (err) {
       console.log(err);
      }
    };
    getMoviesDetails(movieId);
      }, [movieId]);
    

    return (
        <>
            
            {data.length > 0 ? (
                <div>This movie is not found</div>
            ) : (
                <>
                    <ul key={data.id}>
                        <li>
                            <p>{data.title}</p>
                            <p>{data.body}</p>
                        </li>
                    </ul>
                </>
            )}
        </>
    )

};

export default PostDetails;