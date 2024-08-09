import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="py-5 px-5 md:px-5 lg:px-28 flex flex-col items-center">
    <div className="flex justify-between items-center w-full mb-8">
      <h1 className="text-2xl font-bold">Da-Gist</h1>
      <Link to="/">
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
        </button>
      </Link>
    </div>
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-5xl font-medium">Your Trending Gist</h2>
      <p className="mt-10 max-w-[720px] mx-auto text-xs sm:text-base">
        Hey there, Gist Lover! 🌟 Welcome to Da Gist Blog, where the juiciest stories and hottest trends collide! Whether you are here for the latest celebrity buzz, fashion tips, football, or tech updates, we have got the inside scoop just for you. Buckle up, because things are about to get spicy! Let's dive into the world of Gist together. 🎉
      </p>
    </div>
    <form
      className="flex items-center max-w-[500px] w-full border border-black shadow-[-8px_8px_0px_#000000] mx-auto"
      action=""
    >
      <input
        type="email"
        placeholder="Enter Email"
        className="flex-grow pl-4 py-2 outline-none"
      />
      <button
        type="submit"
        className="border-l border-black py-2 px-4 sm:px-8 active:bg-gray-600 active:text-white"
      >
        Subscribe
      </button>
    </form>
  </header>
);

export default Header;
