import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header
      className="
    bg-green-500
      h-16
      p-4
      shadow-md
      w-full
      flex
      items-center
      justify-between
    "
    >
      <span>logo</span>
      <nav className="flex items-center gap-2">
        <Link href={'/'} passHref>
          Holmes
        </Link>
        <Link href={'/about'} passHref>
          About
        </Link>
        <Link href={'/projects'} passHref>
          Projects
        </Link>
        <Link href={'/contact'} passHref>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
