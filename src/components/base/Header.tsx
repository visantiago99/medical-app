import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';

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
      <Avatar>
        <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=male" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
