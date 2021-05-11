import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import apiClient from '../apiClient'



const Blog_post = ({post_info}) => {
    
    const history = useHistory();
    const deletePost = async() => {
        try{
            await apiClient.deletePost(post_info.id)
            history.push('/home');
        }catch{
            alert("Failed to delete post!")
        }

    }

    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h4>{post_info.title}</h4>
                </div>
                <div className="card-body">
                    <div>
                        <span className="badge">user id: {post_info.user_id}</span>
                        <span className="badge">Posted {post_info.created_at}</span>
                    </div>
                    <p>{post_info.body}</p>
                    <Link to={`/edit/${post_info.id}`} type="button" className="btn btn-info">Edit</Link>
                    <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={deletePost} 
                    >Delete</button>
                </div>            
            </div>            
        </div> 
    );

};


export default Blog_post;


