import React from "react";
import { assets } from "@/assets/assets"; 
import Image from "next/image";

const Header = () => {
    return (
        <div className="py-5 px-5 md:px-5 lg:px-28">
            <div className="flex justify-between items-center">
                <Image src={assets.logo} width={180} alt="Logo" className="w-[130px] sm:w-auto" />
            </div>
        </div>
    );
}

export default Header;
