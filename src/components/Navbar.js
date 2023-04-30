import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black flex items-center justify-between">
        <h1 className="text-white ml-12 font-bold text-2xl">Hunting Coder</h1>
        <ul className="flex pr-12 gap-20 items-center py-4 text-white font-semibold">
          <Link href="/">
            <li className="hover:cursor-pointer">Home</li>
          </Link>
          <Link href="/blog">
            <li className="hover:cursor-pointer">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="hover:cursor-pointer">Contact</li>
          </Link>
          <Link href="/about">
            <li className="hover:cursor-pointer">About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
