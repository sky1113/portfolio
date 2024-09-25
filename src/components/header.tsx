"use client";

import React, { useState, useCallback } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu open or closed
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="z-50 fixed top-0 left-0 w-full">
      <div className="fixed flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 h-24 bg-white/80 border-b border-customBorder backdrop-blur-lg">
        <h1 className="font-cormorant font-bold italic text-xl sm:text-2xl">
          <a href="/" className="hover:text-gray-600">
            Skylar Rearick
          </a>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-between gap-4 lg:gap-10 font-cabin text-lg lg:text-xl">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              scroll={false}
              className="hover:text-gray-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="fixed top-24 left-0 w-full bg-white/80 border-b border-customBorder backdrop-blur-lg py-4 md:hidden"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col items-center gap-4 font-sans text-xl">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                scroll={false}
                className="hover:text-gray-600"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
