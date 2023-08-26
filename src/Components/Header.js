import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Store/MenuSlice";
import searchImage from "../Utils/Images/search.png";
import menuImage from "../Utils/Images/menu.png";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between mx-2 my-1 px-2 py-3 shadow-md">
      <button className="mx-4" onClick={() => dispatch(toggleMenu())}>
        <img alt="Menu" src={menuImage} className="w-6 h-6" />
      </button>
      <div className="items-center flex">
        <input
          type="text"
          className="py-2 px-5 border border-1 rounded-l-full w-96"
          placeholder="Search..."
        />
        <button className="p-2 border border-1 rounded-r-full">
          <img alt="Search Icon" src={searchImage} className="w-6 h-6 p-1" />
        </button>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
