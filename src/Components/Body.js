import React from "react";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { useSelector } from "react-redux";

const Body = () => {
  const menuFlag = useSelector((state) => state.menu.show);

  return (
    <div className="flex">
      {menuFlag && <Menu />}
      <MainContent />
    </div>
  );
};

export default Body;
