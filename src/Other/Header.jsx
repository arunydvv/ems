import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between px-4 ">
      <h1 className="text-2xl ">
        Hello <br />
        <span className="text-2xl font-medium ">Arun 😊</span>
      </h1>
      <button className="bg-red-500 rounded-2xl text-white px-5 py-2 text-lg font-medium ">Logout</button>
    </div>
  );
};

export default Header;
