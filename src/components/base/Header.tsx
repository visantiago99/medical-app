import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';
import UserNav from './UserNav';

const Header = () => {
  return (
    <header
      style={{ borderBottom: '1px solid #aeaeae' }}
      className="
      bg-slate-200
      h-16
      p-4
      shadow-md
      w-full
      flex
      items-center
      justify-between
    "
    >
      <Link href={'/'}>
        <Image alt="logo" src={Logo} />
      </Link>
      <UserNav />
    </header>
  );
};

export default Header;
