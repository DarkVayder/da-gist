'use client';
import { assets, blog_data } from '@/assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <Image src={assets.logo} width={62} alt='Logo' className='w-[130px] sm:w-auto' />
      <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
        Get Started 
        <Image src={assets.arrow} alt='Arrow' />
      </button>
    </div>
  );
};

export default Page;
