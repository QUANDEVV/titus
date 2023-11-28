// pages/blogs/[id].js

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const BlogDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; // Retrieve the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        // Fetch blog details using the ID
        const response = await fetch(`http://localhost:3001/blogs/${id}`); // Replace with your API endpoint for fetching a single blog
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setBlog(data); // Set the fetched blog data to the state
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Blog Details</h1>
      {blog ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-700 mb-4">{blog.content}</p>
          <div className="flex flex-col text-gray-600">
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
            {/* Display other blog details here */}
          </div>
        </div>
      ) : (
        <p className="text-xl">Loading...</p>
      )}
    </div>
  );
};

export default BlogDetailsPage;
