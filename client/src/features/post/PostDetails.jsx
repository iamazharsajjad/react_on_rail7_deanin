import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../constants';

function PostDetails() {
    const[post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      const fetchCurrentPost = async() =>{
        try{
          const response = await fetch(`${API_URL}/${id}`);
          if (response.ok){
            const json = await response.json();
            setPost(json);
          }else{
            throw response;
          }
        }
        catch(e){
          console.log("An error occured:", e);
        }
      };
      fetchCurrentPost();

    }, [id]);

    const deletePost = async ()=> {
      try{
        const response = await fetch (`${API_URL}/${id}`, {
          method: "DELETE",
        });

        if (response.ok){
          navigate('/');
        }else{
          throw response;
        }
      }catch(e){
        console.log("An error was occured:", e);
      }
    }
    if (!post) return <h2>Loading ...</h2>;

    return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back To Posts</Link>
      { "|" }
      <button onClick={deletePost}>Delete</button>

    </>
  )
}
export default PostDetails;