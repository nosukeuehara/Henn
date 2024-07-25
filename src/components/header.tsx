import React from "react";
import UserButton from "./user-button";
import MainNav from "./main-nav";
import PostButton from "./post-button";

const Header = () => {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        <MainNav />
        <div className=" flex space-x-7">
          <UserButton />
          <PostButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
