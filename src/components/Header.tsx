import React from "react";
import logo from '../assets/images/logo1.png';
import { useState } from "react";

// Create navbar with logo and a-tags to Homepage, Contact.tsx and CV.tsk
// Import in Layout.tsx file to be displayed on all pages (should be sticky to the top)
const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        // h-16 mx-auto px-5 flex items-center 
        <nav className="w-full bg-white shadow">
        <div className="justify-between px-5 h-16 mx-auto lg:max-w-3xl md:items-center md:flex md:px-4">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <img className="object-scale-down h-12"  src={logo}></img>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="flex items-center gap-8">
         <li><a className="bg-white uppercase border-none text-xl" href="">Home</a></li>
           <li><a className="bg-white uppercase border-none text-xl" href="">Contact</a></li>
           <li><a className="bg-white uppercase border-none text-xl" href="">CV</a></li>
         </ul>
                </div>
            </div>
        </div>
    </nav>
    );

// return (
//     <div className="shadow bg-white">
//     <div className="h-16 mx-auto px-5 flex items-center justify-between">
//     <img className="object-scale-down h-14 mt-2"  src={logo}></img>
//     <nav>
//         <ul className="flex items-center gap-8">
//           <li><a className="bg-white uppercase border-none text-xl" href="">Home</a></li>
//           <li><a className="bg-white uppercase border-none text-xl" href="">Contact</a></li>
//           <li><a className="bg-white uppercase border-none text-xl" href="">CV</a></li>
//         </ul>
//         </nav>
//     </div>
//   </div>
  
// )
};

export default Header;

