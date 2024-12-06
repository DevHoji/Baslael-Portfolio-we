// src/components/Header.tsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">[Your Name]</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="#about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
