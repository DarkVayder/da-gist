import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => (
  <footer className=" text-black text-center p-4 mt-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
      <div className="flex items-center space-x-2">
        <div className="text-lg font-bold">Da-Gist</div>
        <p className="text-sm">All rights reserved. Copyright © Da-Gist</p>
      </div>

      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <a href="https://facebook.com" aria-label="Facebook" className="bg-white rounded-full p-2">
          <FaFacebook className="text-gray-800" size={32} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="bg-white rounded-full p-2">
          <FaXTwitter className="text-gray-800" size={32} />
        </a>
        <a href="https://plus.google.com" aria-label="Google Plus" className="bg-white rounded-full p-2">
          <FaWhatsapp className="text-gray-800" size={32} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
