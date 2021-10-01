import React, { createContext, useEffect, useState } from "react";
import { data } from '../data'

export const ContextPosts = createContext(null);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [firstPost, setFirstPost] = useState({})

  useEffect(() => {
    setPosts(data.posts)
    setFirstPost(data.posts[0])
  }, [])

	return (
		<ContextPosts.Provider value={{ posts, firstPost }}>
			{children}
		</ContextPosts.Provider>
	);
};

export default PostsProvider;