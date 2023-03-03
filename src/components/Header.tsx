import React from "react";
import logo from "../assets/images/logo1.png";
import { useState } from "react";

// Create navbar with logo and a-tags to Homepage, Contact.tsx and CV.tsk
// Import in Layout.tsx file to be displayed on all pages (should be sticky to the top)
const Header = () => {
  // const [navbar, setNavbar] = useState(false);

  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <img className="object-scale-down h-14 mt-2" src={logo}></img>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a className="bg-white uppercase border-none text-xl" href="">
                Home
              </a>
            </li>
            <li>
              <a className="bg-white uppercase border-none text-xl" href="">
                Contact
              </a>
            </li>
            <li>
              <a className="bg-white uppercase border-none text-xl" href="">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
