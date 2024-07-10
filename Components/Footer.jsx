import Image from 'next/image';
import React from 'react';
import { assets } from '@/assets/assets';

const Footer = () => {
    return (
        <div className='py-4 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
  
                <div className='flex items-center'>
                    <Image src={assets.logo_light} alt='Logo' width={80} height={40} />
                    <p className='ml-2 text-sm text-black'>All rights reserved. Copyright © Da-Gist</p>
                </div>

                <div className='flex items-center space-x-4'>
                    <a href='https://facebook.com' aria-label='Facebook' className='bg-white rounded-full p-2'>
                        <Image className='cursor-pointer' src={assets.facebook_icon} alt='Facebook' width={32} height={32} />
                    </a>
                    <a href='https://twitter.com' aria-label='Twitter' className='bg-white rounded-full p-2'>
                        <Image className='cursor-pointer' src={assets.twitter_icon} alt='Twitter' width={32} height={32} />
                    </a>
                    <a href='https://plus.google.com' aria-label='Google Plus' className='bg-white rounded-full p-2'>
                        <Image className='cursor-pointer' src={assets.googleplus_icon} alt='Google Plus' width={32} height={32} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
