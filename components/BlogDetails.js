// BlogDetails.js

import React from 'react';

const BlogDetails = ({ blog }) => {
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      {/* Additional details or styling can be added here */}
    </div>
  );
};

export default BlogDetails;
