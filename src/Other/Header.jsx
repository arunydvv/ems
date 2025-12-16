import React from "react";

const Header = ({name}) => {

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }

  return (
    <div className="flex items-end justify-between px-4 ">
      <h1 className="text-2xl ">
        Hello <br />
        <span className="text-2xl font-medium ">{name} 😊</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 rounded-2xl text-white px-5 py-2 text-lg font-medium cursor-pointer "
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
