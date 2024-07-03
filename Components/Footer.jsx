import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black pu-5 items-center'>
            <Image src={assets.logo_light} alt='' width={80}/>
            <p className='text-sm text-white'>All right reserved. Copyright @Da-Gist</p>
        </div>
    )
}

export default Footer;