// import { generateRandomColor } from "../Utils/Helpers";

const LiveChatSingle = ({ name, message }) => {
  // const color = "bg-" + generateRandomColor() + "-500";
  // console.log(color);
  return (
    <div className="flex p-2">
      <button
        className={
          "rounded-full text-white font-semibold p-1 mx-3 my-2 w-8 bg-y bg-orange-500"
          // + color
        }
      >
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
