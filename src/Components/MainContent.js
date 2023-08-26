import React from "react";
import VideosContainer from "./VideosContainer";
import ButtonsList from "./ButtonsList";

const MainContent = () => {
  return (
    <div>
      <ButtonsList />
      <VideosContainer />
    </div>
  );
};

export default MainContent;
