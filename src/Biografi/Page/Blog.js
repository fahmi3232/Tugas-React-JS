import React, {useState, useEffect} from 'react';
import BlogComp from '../Comp/BlogComp/BlogComp';
import Api from '../Api/BlogApi'


const Blog = () => {
  
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    Api.get('/blogs').then(res => {
      setBlog(res.data)
    })
  }, [])
  
  return (

    <div>
      {blog && <BlogComp blog={blog} />}
    </div>
  ) 
};

export default Blog;
