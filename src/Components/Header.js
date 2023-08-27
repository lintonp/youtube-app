import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Store/MenuSlice";
import searchImage from "../Utils/Images/search.png";
import menuImage from "../Utils/Images/menu.png";
import youtubeLogo from "../Utils/Images/youtubeLogo.png";
// import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    console.log("clicked");
    dispatch(toggleMenu());
    //() => dispatch(toggleMenu())
  };

  return (
    <div className="flex justify-between mx-2 my-1 px-2 py-3 shadow-md">
      <div className="flex flex-wrap">
        <button className="mx-4" onClick={handleMenuClick}>
          <img alt="Menu" src={menuImage} className="w-6 h-6" />
        </button>
        <div className="m-1 ml-4">
          <img alt="Menu" src={youtubeLogo} className="w-24 h-10" />
          {/* <Link to="/">
          </Link> */}
        </div>
      </div>
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
        <button className="rounded-full bg-orange-500 text-white font-semibold p-1 mx-3 my-2 w-8">
          L
        </button>
      </div>
    </div>
  );
};

export default Header;
