import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Store/MenuSlice";
import searchImage from "../Utils/Images/search.png";
import menuImage from "../Utils/Images/menu.png";
import youtubeLogo from "../Utils/Images/youtubeLogo.png";
import {
  YOUTUBE_SEARCH_SUGGESTIONS,
  YOUTUBE_SEARCH_API,
  YOUTUBE_ROPULAR_VIDEOS_URL,
  multipleVideoIDs,
} from "../Utils/Constants";
import { Link } from "react-router-dom";

import { refreshList } from "../Store/VideosSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchKeywords, setSearchKeywords] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  //temp states
  const [searchedData, setSearchedData] = useState([]);
  const [idList, setidsList] = useState([]);

  const searchSuggestions = [
    "iphone",
    "iphone 14",
    "iphone 14 Max Pro",
    "iphone 13",
    "iphone 13 Max Pro",
  ];

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
    console.log("clicked");
    dispatch(toggleMenu());
    //() => dispatch(toggleMenu())
  };

  useEffect(() => {
    console.log("searchedData useEffect Called");
    const getvideoIDs = async () => {
      // const videoIDs = searchedData.map((item) => item.id.videoId);
      const idsString = searchedData.map((item) => item.id.videoId).join("%2C");
      console.log("idsString: ", idsString);
      const idData = await fetch(
        multipleVideoIDs.replace("MULTIPLEVIDEOIDs", idsString)
      );
      const idJson = await idData.json();
      setidsList(idJson?.items);
      // console.log("idList: ", idList);
    };
    getvideoIDs();
  }, [searchedData]);

  useEffect(() => {
    console.log("idList Called");
    dispatch(refreshList(idList));
  }, [idList]);

  const handleSearchClick = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API.replace("searchKeyword", searchKeywords)
    );
    const json = await data.json();
    // console.log("YOUTUBE_SEARCH_API - " + data);
    // console.log("YOUTUBE_SEARCH_API - " + json);
    setSearchedData(json?.items);
    setSearchKeywords("");
    setShowSearchSuggestions(false);
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
            // onBlur={setShowSearchSuggestions(false)}
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
