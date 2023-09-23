import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API, multipleVideoIDs } from "../Utils/Constants";
import { refreshList, setIsLoading } from "../Store/VideosSlice";

const MenuItems = ({ name }) => {
  const dispatch = useDispatch();
  const updateVideosSlice = async (list) => {
    const data = await fetch(
      multipleVideoIDs.replace("MULTIPLEVIDEOIDs", list.join("%2C"))
    );
    const json = await data.json();
    dispatch(refreshList(json?.items));
  };

  const fetchVideos = async () => {
    dispatch(setIsLoading());
    const data = await fetch(YOUTUBE_SEARCH_API.replace("searchKeyword", name));
    const json = await data.json();
    console.log("Button data", json?.items);
    const list = json?.items.map((item) => item.id?.videoId).filter((id) => id); //filtering video ID only, channel/playlist IDs will be undefined
    updateVideosSlice(list);
  };

  return (
    <li onClick={fetchVideos} className="p-2 hover:shadow-md cursor-pointer">
      {name}
    </li>
  );
};

export default MenuItems;
