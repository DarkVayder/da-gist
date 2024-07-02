import React from "react"
import { assets } from "@/assets/assets"; 
import image from "next/image"

const Header = () => {
    return (
        <div className="py-5 px-5 md:px lg:px-28">
            <div className="flex justify-between items-center">
                <image src = {assets.logo} width={180} alt="" className="w-[130px] sm-w-auto" />

            </div>
        </div>
    )
}

export default Header;  