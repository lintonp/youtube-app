import React, { useState } from "react";
import { addCommasToNumberString } from "../Utils/Helpers";

const VideoDetails = ({ videoData }) => {
  const [DescriptionVisible, setDescriptionVisible] = useState(false);
  return (
    <div className="w-[800px]">
      <h1 className="mt-1 text-lg font-bold w-[800px]">
        {videoData && videoData.snippet.title}
      </h1>
      <div className="bg-slate-200 rounded-lg p-3 my-2">
        <div className="flex font-semibold">
          <p className="mr-2">
            {addCommasToNumberString(videoData.statistics.viewCount)} views
          </p>
          <p className="ml-2">{videoData.snippet.publishedAt.split("T")[0]}</p>
        </div>
        <p
          onClick={() => setDescriptionVisible(!DescriptionVisible)}
          className={
            DescriptionVisible ? "cursor-pointer" : "cursor-pointer truncate"
          }
        >
          {videoData.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetails;
