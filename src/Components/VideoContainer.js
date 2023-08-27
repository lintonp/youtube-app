import { useEffect } from "react";
import { collapseMenu } from "../Store/MenuSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(collapseMenu());
  }, []);

  return (
    <div>
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/llEOGuilU6w?si=IbF2RgBeUyeRFCXI"
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
