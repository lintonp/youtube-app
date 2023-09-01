import { useEffect } from "react";
import { collapseMenu } from "../Store/MenuSlice";
import { useDispatch } from "react-redux";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(window.location.href);

  console.log();

  useEffect(() => {
    dispatch(collapseMenu());
  }, [dispatch]); //Added dispatch for deploy in netlify

  return (
    <div className="">
      <div className="flex m-2">
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
          {/* Add show and Hide Live Chat */}
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default VideoContainer;
