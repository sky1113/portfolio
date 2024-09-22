"use client";

import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { links } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='z-[100]'>
      <div className='flex justify-between items-center w-full px-4 sm:px-6 md:px-8 lg:px-[98px] h-[100px] fixed bg-white/80 border-b border-[#484848] backdrop-blur-[500px]'>
        <div className="font-serif font-bold italic text-xl sm:text-2xl">Skylar Rearick</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-between gap-4 lg:gap-[40px] font-sans text-lg lg:text-xl">
          {links.map((link) => (
            <a 
              key={link.hash} 
              href={link.hash} 
              className="hover:text-gray-600 capitalize"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed top-[100px] left-0 w-full bg-white/80 border-b border-[#484848] backdrop-blur-[500px] py-4 md:hidden">
          <div className="flex flex-col items-center gap-4 font-sans text-xl">
            {links.map((link) => (
              <a 
                key={link.hash} 
                href={link.hash} 
                className="hover:text-gray-600"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}