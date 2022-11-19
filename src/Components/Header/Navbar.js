import React from "react";

function Navbar() {
  return (
    <div className=" h-20 w-full flex justify-around items-center font-bold text-white absolute z-50">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="flex ">
          <li className="px-5">Home</li>
          <li className="px-5">About</li>
          <li className="px-5">Portfolio</li>
          <li className="px-5">Contact</li>
          <li className="px-5">Blog</li>
        </ul>
      </div>
      <div className="">
        <button className="bg-green-500 p-4 text-white rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
}

export default Navbar;
