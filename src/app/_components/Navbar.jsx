import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-2 py-6 items-center">
      <div>
        <img
          src="./pherico.png"
          alt="Logo"
          className="h-12 w-12 rounded-full"
        />
      </div>

      {/* 2nd Child */}
      <div className="flex flex-row text-white justify-evenly items-center gap-x-24 font-semibold text-2xl leading-10">
        <h1 className="cursor-pointer hover:text-gray-400">About</h1>
        <h1 className="cursor-pointer hover:text-gray-400">Career</h1>
        <h1 className="cursor-pointer hover:text-gray-400">Blogs</h1>
      </div>

      {/* 3rd Child */}
      <div>
        <img
          src=""
          alt="User Profile"
          className="h-12 w-12 rounded-full shadow-md"
        />
      </div>
    </nav>
  );
};

export default Navbar;
