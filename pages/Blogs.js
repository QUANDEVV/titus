// Blogs.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Blogs = ({ blogss }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3002/blogs'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle selecting a blog
  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="blogs">
      <section className="ml-40 sm:ml-4 mr-4">
        <h1 className="text-6xl font-bold md:text-4xl ml-2">Proxima Blogs</h1>

        <div className="flex gap-4 mt-8 sm:overflow-x-auto">
          {blogs.map((blog) => (
            <div className="flex-1 p-4 rounded" key={blog.id}>
              {/* Pass the handleSelectBlog function to each blog */}
              <div onClick={() => handleSelectBlog(blog)}>
                <Link href={`/blogs/${blog.id}`} key={blog.id}>
                  <div className="text-2xl font-semibold mb-2">{blog.title}</div>
                </Link>
                <p className="sm:w-[250px]">{blog.content}</p>
                <div className="flex flex-col text-gray-500 mt-2">
                  <span>Author: {blog.author}</span>
                  <span>Date: {blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
     


      
    </div>
  );
};

export default Blogs;
