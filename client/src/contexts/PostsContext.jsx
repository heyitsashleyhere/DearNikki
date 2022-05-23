import React, { useEffect, useState } from "react"
import axios from 'axios'

export const PostsContext = React.createContext(null)

function PostContextProvider({ children }){
    const [posts, setPosts] = useState([])
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/posts'
        }).then(response => setPosts(response.data))
          .catch(error => console.log('error', error))
    }, [posts])
    

    const postsContextValue = {
        posts,
        currentId, setCurrentId
    }

    return (
        <PostsContext.Provider value={postsContextValue}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostContextProvider