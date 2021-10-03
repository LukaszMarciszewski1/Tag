import React, { createContext, useEffect, useState } from "react";
import { data } from '../data'

export const ContextPosts = createContext(null);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(data.posts)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setPosts(data.posts)
  }, [])

	return (
		<ContextPosts.Provider value={{ posts, loading }}>
			{children}
		</ContextPosts.Provider>
	);
};

export default PostsProvider;