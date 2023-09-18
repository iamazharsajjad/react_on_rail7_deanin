import React from 'react';
import  {Route, Routes} from 'react-router-dom';
import PostsList from '../features/post/PostsList';
import PostDetails from '../features/post/PostDetails';

function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />}/>
            <Route path="/new" element = {<h1>New Post From</h1>} />
        </Routes>
        </>
    )
}

export default AppRoutes;