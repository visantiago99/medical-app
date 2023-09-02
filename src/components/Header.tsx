import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
  return (
    <header
      style={{ borderBottom: '1px solid #aeaeae' }}
      className="
      bg-[#f0f0f0]
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
        <AvatarImage src="https://xsgames.co/randomusers/avatar.php?g=male" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
