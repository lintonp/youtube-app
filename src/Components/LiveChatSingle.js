const LiveChatSingle = ({ name, message }) => {
  return (
    <div className="flex p-2">
      <button className="rounded-full bg-orange-500 text-white font-semibold p-1 mx-3 my-2 w-8">
        {name[0]}
      </button>
      <div>
        <p className="font-semibold">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LiveChatSingle;
