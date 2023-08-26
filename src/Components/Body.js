import React from "react";
import Menu from "./Menu";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const menuFlag = useSelector((state) => state.menu.show);

  return (
    <div className="flex">
      {menuFlag && <Menu />}
      <VideoContainer />
    </div>
  );
};

export default Body;
