import { useEffect } from "react";
import { collapseMenu } from "../Store/MenuSlice";
import { useDispatch } from "react-redux";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";
// import { YOUTUBE_VIDEO_URL } from "../Utils/Constants";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(window.location.href);
  // const [videoData, setVideoData] = useState({});
  //console.log("Video Container");

  // const fetchVideo = async () => {
  //   // const ID = searchParams.get("v");
  //   //console.log("fetchVideo");
  //   const data = await fetch(YOUTUBE_VIDEO_URL);
  //   const json = await data.json();
  //   setVideoData(json);
  //   //console.log("Video json data: ", json);
  // };

  useEffect(() => {
    //console.log("useEffect");
    dispatch(collapseMenu());
    // fetchVideo();
  }, [dispatch]); //Added dispatch for deploy in netlify

  return (
    <div className="">
      <div className="flex m-2">
        <div className="">
          <iframe
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="mt-1 text-lg">
            Title
            {/* {videoData === {}
              ? "Loading..."
              : videoData?.items[0]?.snippet.title} */}
          </h1>
        </div>
        {/* <div className="mx-2 p-2 shadow-md h-[450px] overflow-y-scroll"> */}
        <div width="250">
          {/* Add show and Hide Live Chat */}
          <LiveChat />
        </div>
      </div>
      <div>
        {/* <CommentsContainer /> */}
        <CommentsContainer id={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default VideoContainer;
