import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import UserButton from "./usr-button";
import MainNav from "./main-nav";
=======
import UserButton from "./user-button";
import MainNav from "./main-nav";
import PostButton from "./post-button";
>>>>>>> 03a7609 (test)
=======
import UserButton from "./usr-button";
import MainNav from "./main-nav";
>>>>>>> 8d290f4 (こみこみっと)

const Header = () => {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        <MainNav />
<<<<<<< HEAD
<<<<<<< HEAD
        <UserButton />
=======
        <div className=" flex space-x-7">
          <UserButton />
          <PostButton />
        </div>
>>>>>>> 03a7609 (test)
=======
        <UserButton />
>>>>>>> 8d290f4 (こみこみっと)
      </div>
    </header>
  );
};

export default Header;
