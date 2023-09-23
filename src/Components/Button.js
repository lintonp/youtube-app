import {
  YOUTUBE_ROPULAR_VIDEOS_URL,
  YOUTUBE_SEARCH_API,
  multipleVideoIDs,
} from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { refreshList, setIsLoading } from "../Store/VideosSlice";

const Button = ({ name, isSelected, setSelectedButton }) => {
  const dispatch = useDispatch();
  const updateVideosSlice = async (list) => {
    const data = await fetch(
      multipleVideoIDs.replace("MULTIPLEVIDEOIDs", list.join("%2C"))
    );
    const json = await data.json();
    dispatch(refreshList(json?.items));
  };

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API.replace("searchKeyword", name));
    const json = await data.json();
    console.log("Button data", json?.items);
    const list = json?.items.map((item) => item.id?.videoId).filter((id) => id); //filtering video ID only, channel/playlist IDs will be undefined
    updateVideosSlice(list);
  };

  const fetchAllVideos = async () => {
    const data = await fetch(YOUTUBE_ROPULAR_VIDEOS_URL);
    const json = await data.json();
    dispatch(refreshList(json?.items));
  };

  const handleOnclick = () => {
    dispatch(setIsLoading());
    name === "All" ? fetchAllVideos() : fetchVideos();
    setSelectedButton(name);
  };

  return (
    <button
      onClick={handleOnclick}
      className={
        isSelected
          ? "py-[6px] px-2 m-2 text-sm rounded-md bg-black whitespace-nowrap text-white font-semibold"
          : "py-[6px] px-2 m-2 text-sm rounded-md bg-slate-200 whitespace-nowrap hover:bg-slate-300"
      }
    >
      {name}
    </button>
  );
};

export default Button;
