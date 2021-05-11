import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import CardContainer from './cardContainer'
import apiClient from '../apiClient'

const Edit = () => {

    const {id} = useParams();
    const history = useHistory();
    const [loading,setLoading] = useState(false);
    const [post,setPost] = useState('');
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const user = 1

    const onEditSubmit = async() => {
        setLoading(true);
        try{
            await apiClient.updatePost(id,{
                "title":title,
                "body":body,
                "user_id":user
            })
            history.push('/home');
        }catch{
            alert("Failed to add post!")
        } finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        apiClient.getPost(id)
            .then(res=>{
                setTitle(res.data.data.title)
                setBody(res.data.data.body)
            })
    },[]);


    return(
        <CardContainer title="Create Post">
            <form>
                <div className="form-group">
                    <label>
                        Title
                    </label>
                    <input 
                    className="form-control" 
                    type="text" 
                    value={title}
                    onChange = {e=>setTitle(e.target.value)}
                    required/>
                </div>

                <div className="form-group">
                    <label>
                        Body
                    </label>
                    <textarea 
                    className="form-control"
                    value={body}
                    onChange = {e=>setBody(e.target.value)} 
                    required />
                </div>
                <div className="form-group">
                    <button 
                    className="btn btn-info" 
                    onClick={onEditSubmit} 
                    disabled={loading}
                    >{loading ? 'loading...' : "Edit"}</button>
                </div>
            </form>
        </CardContainer>
    );
};

export default Edit;