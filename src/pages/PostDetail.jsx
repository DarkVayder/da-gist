import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      {/* Da Gist Logo and Link */}
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-2xl font-bold">Da-Gist</h1>
        <Link to="/">
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
            More Gist!
          </button>
        </Link>
      </div>

      {/* Post Category */}
      <div className="mb-4">
        <span className="inline-block bg-white text-black text-sm font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Post Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{post.title}</h2>

      {/* Post Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto object-cover mb-6 rounded-lg shadow-md"
      />

      {/* Post Description */}
      <p className="text-base md:text-lg text-gray-700 mb-6">{post.description}</p>

      {/* Post Author */}
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">{post.author_img}</div>
        <p className="text-gray-600 text-sm md:text-base">{post.author}</p>
      </div>
    </div>
  );
};

export default PostDetail;
