import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Post = ({ post }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <img src={post.image} alt={post.title} className="w-full h-auto mb-4 rounded-md" />
    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
    <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
    <Link to={`/post/${post.id}`} className="inline-flex items-center px-4 py-2 text-black bg-gray-200 rounded hover:bg-gray-300 transition duration-300 ease-in-out">
      Read More
      <FaArrowRight className="ml-2" />
    </Link>
  </div>
);

export default Post;
