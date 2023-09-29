import { useEffect, useState } from "react";
import { collapseMenu } from "../Store/MenuSlice";
import { useDispatch, useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";
import VideoDetails from "./VideoDetails";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState(null);
  // const searchParams = new URLSearchParams(document.location.href);
  // const key = searchParams.get("v");
  // console.log(key);
  const videoUrl = window.location.href;
  const match = videoUrl.match(/[?&]v=([^&]+)/);
  const key = match ? match[1] : null;

  const videosList = useSelector((store) => store.videos.allVideos);

  useEffect(() => {
    dispatch(collapseMenu());
    setVideoData(videosList.filter((item) => item.id === key)[0]);
  }, []);

  return (
    <div className="">
      <div className="flex my-2 ml-8">
        <div className="">
          <iframe
            className="rounded-xl"
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + key + "?vq=hd720p"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {videoData && <VideoDetails videoData={videoData} />}
        </div>
        {/* <div className="mx-2 p-2 shadow-md h-[450px] overflow-y-scroll"> */}
        <div width="250">
          {/* Add show and Hide Live Chat */}
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer id={key} />
      </div>
    </div>
  );
};

export default VideoContainer;
