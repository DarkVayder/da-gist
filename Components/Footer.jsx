import Image from 'next/image';
import React from 'react';
import { assets } from '@/assets/assets';

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt='Logo' width={80} />
            <p className='text-sm text-white'>All rights reserved. Copyright © Da-Gist</p>
            <div className='flex gap-4'>
                <Image src={assets.facebook_icon} alt='Facebook' width={38} height={38} />
                <Image src={assets.twitter_icon} alt='Twitter' width={38} height={38} />
                <Image src={assets.googleplus_icon} alt='Google Plus' width={38} height={38} />
            </div>
        </div>
    );
}

export default Footer;
