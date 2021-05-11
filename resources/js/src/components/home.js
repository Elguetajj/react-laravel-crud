import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import apiClient from '../apiClient'

import Blog_post from './post'
import CardContainer from './cardContainer'
    
const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        apiClient.getFeed()
            .then(res=>setPosts(res.data.data))
    },[]);


    const renderPosts = ()=>{
       
        if(posts.length>=0){
            console.log(posts)
            let i = 0
            return posts.map((post)=>{
                return <Blog_post key={post.title+i++} post_info={post}/>
            })
        }else  {
            return(
                <CardContainer body="There are no posts...">
                </CardContainer>
            )
        }
    }

    return(
        <div className="Home__container">
            <CardContainer title="Feed">
                <p className="card-text">Create a new post now.</p>
                <Link to='add' className="btn btn-primary">New Post</Link>
            </CardContainer>
            <div id="posts">
                {renderPosts()}
            </div> 

            
              
        </div>
    );
};


export default Home;
