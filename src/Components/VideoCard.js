const VideoCard = ({ data }) => {
  const snippet = data.snippet;
  const thumbnail = data?.snippet?.thumbnails?.medium;
  const stats = data?.statistics;

  const processLikesViews = (num) => {
    return num > 1000000
      ? parseFloat((num / 1000000).toFixed(1)) + "M"
      : num > 1000
      ? num / 1000 + "K"
      : num;
  };

  return (
    <div className="m-3 p-1 max-w-sm">
      <img
        alt={"snippet.title"}
        src={thumbnail.url}
        className="w-[{thumbnail.width} px] h-48 rounded-md"
      />
      <div className="flex flex-col m-1">
        <span className="font-semibold w-[{thumbnail.width} px]">
          {snippet.title}
        </span>
        <span className="font-normal text-sm text-gray-500">
          {snippet.channelTitle}
        </span>
        <span className="font-normal text-sm text-gray-500">
          {processLikesViews(stats.viewCount)} views
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
