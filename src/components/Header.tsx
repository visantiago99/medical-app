import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
  return (
    <header
      className="
    bg-slate-100
      h-16
      p-4
      shadow-md
      w-full
      flex
      items-center
      justify-between
    "
    >
      <span className="font-bold">Medical APP</span>

      <Avatar>
        <AvatarImage src="https://github.com/visantiago99.png" />
        <AvatarFallback>VS</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;