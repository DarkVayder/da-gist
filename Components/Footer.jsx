import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='py-4 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='text-lg font-bold'>Da-Gist</div>
                    <p className='ml-2 text-sm text-black'>
                        All rights reserved. Copyright © Da-Gist
                    </p>
                </div>

                <div className='flex items-center space-x-4'>
                    <a href='https://facebook.com' aria-label='Facebook' className='bg-white rounded-full p-2'>
                        <FaFacebook className='cursor-pointer' size={32} />
                    </a>
                    <a href='https://twitter.com' aria-label='Twitter' className='bg-white rounded-full p-2'>
                        <FaTwitter className='cursor-pointer' size={32} />
                    </a>
                    <a href='https://plus.google.com' aria-label='Google Plus' className='bg-white rounded-full p-2'>
                        <FaGooglePlusG className='cursor-pointer' size={32} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
