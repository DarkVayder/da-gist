import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data } from '../assets/assets'; 

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blog_data.find(post => post.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return <div className="container mx-auto p-4">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h2>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto object-cover mb-6 rounded-lg shadow-md"
      />
      <p className="text-base md:text-lg text-gray-700 mb-6">{post.description}</p>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">{post.author_img}</div>
        <p className="text-gray-600 text-sm md:text-base">{post.author}</p>
      </div>
    </div>
  );
};

export default PostDetail;
