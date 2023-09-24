import React from 'react';
import  {Route, Routes} from 'react-router-dom';
import PostsList from '../features/post/PostsList';
import PostDetails from '../features/post/PostDetails';
import NewPostForm from '../features/post/NewPostForm';
import EditPostForm from '../features/post/EditPostForm';

function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />}/>
            <Route path="posts/:id/edit" element={<EditPostForm />}/>
            <Route path="/new" element = {<NewPostForm />} />
        </Routes>
        </>
    )
}

export default AppRoutes;