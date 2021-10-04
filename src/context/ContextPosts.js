import React, { createContext, useState } from "react";
import { data } from '../data'

export const ContextPosts = createContext(null);

const PostsProvider = ({ children }) => {
  const [ posts ] = useState(data)

	return (
		<ContextPosts.Provider value={{ posts }}>
			{children}
		</ContextPosts.Provider>
	);
};

export default PostsProvider;