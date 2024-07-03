import Image from 'next/image';
import React from 'react';
import { assets } from "@/assets/assets";

const Gistitem = ({ id, title, description, image, date, category, author, author_img }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Image src={image} alt={title} width={400} height={400} className='border-b border-black' />
      <div className='p-5'>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
        <h2 className='text-xl font-bold mt-2'>{title}</h2>
        <p className='text-sm mt-2'>{description}</p>
        <div className='flex items-center mt-4'>
          <Image src={author_img} alt={author} width={40} height={40} className='rounded-full' />
          <div className='ml-2'>
            <p className='text-sm font-bold'>{author}</p>
            <p className='text-xs text-gray-500'>{new Date(date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className='inline-flex items-center py-2 font-semibold text-center'>
          Read more <Image className="cursor-pointer ml-2" src={assets.arrow} alt='' width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default Gistitem;
