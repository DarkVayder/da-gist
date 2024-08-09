'use client';
import React, { useEffect, useState } from 'react';
import Footer from '@/Components/Footer';
import Link from 'next/link';

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    const blog = blog_data.find(blog => Number(params.id) === blog.id);
    if (blog) {
      setData(blog);
      console.log(blog);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (data ? (
    <>
      <div className='bg-white-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
          </Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
            Get Started
          </button>
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <p className='mt-1 pb-2 text-lg max-w-[730px] mx-auto'>{data.author}</p>
        </div>
        <div className='mx-auto max-w-[700px] md:mx-auto-auto mt-[-100px] mb-10'>
          <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
          <p className='mt-4'>{data.description}</p>
          <h3 className='my-5 text-[18px] font-semibold'>1 absdsdfdfsdfsdfdsfsdsfsdafsds</h3>
          <p className='my-3'>idsiosdodsvdsocvndsoincoisadncoinsdocnsdocsdnios</p>
          <p className='my-3'>idsiosdodsvdsocvndsoincoisadncoinsdocnsdocsdnios</p>
          <h3 className='my-5 text-[18px] font-semibold'>2 absdsdfdfsdfsdfdsfsdsfsdafsds</h3>
          <p className='my-3'>idsiosdodsvdsocvndsoincoisadncoinsdocnsdocsdnios</p>
          <p className='my-3'>idsiosdodsvdsocvndsoincoisadncoinsdocnsdocsdnios</p>
          <h3 className='my-5 text-[18px] font-semibold'>3 absdsdfdfsdfsdfdsfsdsfsdafsds</h3>
          <p className='my-3'>idsiosdodsvdsocvndsoincoisadncoinsdocnsdocsdnios</p>
          <p className='my-3'>idsiosdodsvdsocvndsoincoisadncoinsdocnsdocsdnios</p>
          <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
          <p className='my-3'>The End</p>
          <div className='my-24'>
            <p className='text-black font-semibold my-4'>Share this article</p>
            <div className='flex'>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : <></>);
};

export default BlogPage;
