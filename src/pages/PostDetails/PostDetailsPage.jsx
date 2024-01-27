import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPostIdDetails } from "../../api/user-api";

const PostDetails = () => {
    const [data, setData] = useState([]);

    const { userId } = useParams();


      useEffect(() => {
    if (!userId) return;
    const getMoviesDetails = async id => {
      try {
        const receivedDetails = await getPostIdDetails(id);
        setData(receivedDetails);
      } catch (err) {
       console.log(err);
      }
    };
    getMoviesDetails(userId);
      }, [userId]);
    

    return (
        <>
            
            {!data ? (
                <div>This movie is not found</div>
            ) : (
                    <>
                        {data.map((d) => (
                            <ul key={d.id}>
                                <li>
                                    <p>{d.title}</p>
                                    <p>{d.body}</p>
                                </li>
                            </ul>
                        ))}
                </>
            )}
        </>
    )

};

export default PostDetails;