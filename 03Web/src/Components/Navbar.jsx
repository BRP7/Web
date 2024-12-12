import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-darkGray/80 text-lightGray py-4 px-8 flex justify-between items-center">
      <h1 className="text-neonBlue text-2xl font-bold">NxtSite</h1>
      <ul className="flex space-x-6 text-lg">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
