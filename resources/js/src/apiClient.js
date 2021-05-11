const axios = window.axios;

const BASE_API_ROUTE = "http://localhost/api"


export default {
    getFeed:()=>
        axios.get(`${BASE_API_ROUTE}/posts`),
    getPost:(id)=>
        axios.get(`${BASE_API_ROUTE}/posts/${id}`),
    addPost:(post)=>
        axios.post(`${BASE_API_ROUTE}/posts/`,post),
    updatePost:(id,post)=>
        axios.put(`${BASE_API_ROUTE}/posts/${id}`,post),
    deletePost:(id)=>
        axios.delete(`${BASE_API_ROUTE}/posts/${id}`),
}

