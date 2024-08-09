import React from 'react';
import Link from 'next/link';

const Gistitem = ({ id, title, description, date, category, author }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
      </Link>
      <div className='p-5'>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
        <h2 className='text-xl font-bold mt-2'>{title}</h2>
        <p className='text-sm mt-2'>{description}</p>
        <div className='flex items-center mt-4'>
            <div className='ml-2'>
            <p className='text-sm font-bold'>{author}</p>
            <p className='text-xs text-gray-500'>{new Date(date).toLocaleDateString()}</p>
          </div>
        </div>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
        </Link>
      </div>
    </div>
  );
}

export default Gistitem;
