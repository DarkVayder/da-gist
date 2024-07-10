import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
    return (
        <div className="py-5 px-4 md:px-5 lg:px-28">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Image src={assets.logo} width={62} height={60} alt="Logo" className="w-[130px] sm:w-auto mb-4 sm:mb-0" />
                <button className="flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border border-solid border-black shadow-md">
                    Get Started 
                    <Image src={assets.arrow} width={20} height={20} alt="Arrow" />
                </button>
            </div>
            <div className="text-center my-8">
                <h1 className="text-3xl sm:text-5xl font-medium">Your Trending Gist</h1>
                <p className="mt-6 max-w-[720px] mx-auto text-sm sm:text-base">
                    Hey there, Gist Lover! 🌟 Welcome to Da Gist Blog, where the juiciest stories and hottest trends collide! Whether you're here for the latest celebrity buzz, fashion tips, or tech updates, we've got the inside scoop just for you. Buckle up, because things are about to get spicy! Let's dive into the world of Gist together. 🎉
                </p>
                <form className="flex flex-col sm:flex-row justify-between max-w-[500px] mx-auto mt-8 sm:mt-10">
                    <input type="email" placeholder="Enter Email" className="py-3 px-4 mb-4 sm:mb-0 sm:mr-4 border border-black outline-none rounded-md" />
                    <button type='submit' className="py-3 px-6 border border-black rounded-md shadow-md hover:bg-gray-200 transition duration-300">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default Header;
