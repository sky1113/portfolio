"use client";

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { links } from "@/src/lib/data";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b-2 border-gray-700">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-24">
        <h1 className="font-cormorant font-bold italic text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
          <a
            href="/"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            Skylar Rearick
          </a>
        </h1>

        <nav className="hidden md:flex gap-4 lg:gap-10 font-cabin text-lg lg:text-xl">
          {links.map(({ hash, name }) => (
            <Link
              key={hash}
              href={hash}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t-2 border-gray-700">
          {links.map(({ hash, name }) => (
            <Link
              key={hash}
              href={hash}
              className="block w-full text-center py-3 font-cabin text-xl hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
