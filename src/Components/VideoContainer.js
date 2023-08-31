import { useEffect } from "react";
import { collapseMenu } from "../Store/MenuSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(window.location.href);

  console.log();

  useEffect(() => {
    dispatch(collapseMenu());
  }, []);

  return (
    <div className="">
      <div className="flex">
        <iframe
          width="800"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <div className="mx-2 p-2 shadow-md h-[450px] overflow-y-scroll"> */}
        <div width="250">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
