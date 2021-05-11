import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import CardContainer from './cardContainer'
import apiClient from '../apiClient'

const Add = () => {

    const history = useHistory();
    const [loading,setLoading] = useState(false);
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const user = 1

    const onAddSubmit = async() => {
        setLoading(true);
        
        try{
            await apiClient.addPost({
                "title":title,
                "body":body,
                "user_id":user
            })
            history.push('/home');
        }catch{
            alert("Failed to update post!")
        } finally{
            setLoading(false);
        }
    }
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
                    type="submit"
                    className="btn btn-success" 
                    onClick={onAddSubmit} 
                    disabled={loading}
                    >{loading ? 'loading...' : "Create"}</button>
                </div>
            </form>
        </CardContainer>
    );
};

export default Add