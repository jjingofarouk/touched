import React, { useState, useEffect } from 'react';
import '../styles/components.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // Fetch the blog data from blog.json
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/blog.json'); // Adjust the path accordingly
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <blockquote className="blog-quote">"{post.quote}"</blockquote>
              <p className="blog-story">{post.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;