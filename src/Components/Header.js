import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Store/MenuSlice";
import searchImage from "../Utils/Images/search.png";
import menuImage from "../Utils/Images/menu.png";
import youtubeLogo from "../Utils/Images/youtubeLogo.png";
import { YOUTUBE_SEARCH_API, multipleVideoIDs } from "../Utils/Constants";
import { Link, useNavigate } from "react-router-dom";

import { refreshList } from "../Store/VideosSlice";
import { updateSearchHistory } from "../Store/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const searchHistory = useSelector((store) => store.search.searchHistory);
  const [searchKeywords, setSearchKeywords] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const searchSuggestions = [
    "iphone",
    "iphone 14",
    "iphone 14 Max Pro",
    "iphone 13",
    "iphone 13 Max Pro",
  ];
  // console.log("hist", searchHistory);
  // searchSuggestions.push(searchHistory);

  useEffect(() => {
    let timer;
    if (searchKeywords.length > 0) {
      setShowSearchSuggestions(true);
      timer = setTimeout(getSearchSuggestions, 250);
    } else {
      setShowSearchSuggestions(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchKeywords]);

  const getSearchSuggestions = () => {
    //console.log("getSearchSuggestions");
  };

  const handleMenuClick = () => {
    dispatch(toggleMenu());
    //() => dispatch(toggleMenu())
  };

  const handleSearchClick = async () => {
    fetch(YOUTUBE_SEARCH_API.replace("searchKeyword", searchKeywords))
      .then((data) => data.json())
      .then((json) => {
        const idsString = json?.items
          .map((item) => item.id.videoId)
          .join("%2C");
        //return idsString;
        return fetch(multipleVideoIDs.replace("MULTIPLEVIDEOIDs", idsString));
      })
      .then((idData) => idData.json())
      .then((idJson) => {
        // console.log(".then idJson: ", idJson);
        dispatch(refreshList(idJson?.items));
      });
    setSearchKeywords("");
    setShowSearchSuggestions(false);
    dispatch(updateSearchHistory(searchKeywords));
    navigate("/");
  };

  return (
    <div className="flex justify-between mx-2 my-1 px-2 py-3">
      <div className="flex flex-wrap">
        <button className="mx-4" onClick={handleMenuClick}>
          <img alt="Menu" src={menuImage} className="w-6 h-6" />
        </button>
        <div className="m-1 ml-4">
          <Link to="/">
            <img alt="Menu" src={youtubeLogo} className="w-24 h-10" />
          </Link>
        </div>
      </div>
      <div className="items-center flex flex-col">
        <div className="relative flex">
          <input
            type="text"
            className="py-2 px-5 border border-1 rounded-l-full w-96"
            placeholder="Search..."
            value={searchKeywords}
            onChange={(e) => {
              setShowSearchSuggestions(true);
              setSearchKeywords(e.target.value);
            }}
          />
          <button
            className="p-2 border border-1 rounded-r-full"
            onClick={handleSearchClick}
          >
            <img alt="Search Icon" src={searchImage} className="w-6 h-6 p-1" />
          </button>
        </div>
        {showSearchSuggestions && (
          <ul className="z-10 mt-[42px] -ml-7 w-[376px] py-2 bg-white border border-gray-300 rounded-lg shadow-lg absolute">
            {searchSuggestions.map((item) => (
              <li
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer flex"
                // onClick={setShowSearchSuggestions(false)}
                key={item}
              >
                <img
                  alt="Search Icon"
                  src={searchImage}
                  className="mt-1 w-5 h-5 p-1"
                />
                <p className="ml-2">{item}</p>
              </li>
            ))}
          </ul>
        )}
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
