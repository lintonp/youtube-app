import React from "react";

const Comment = ({ name, comment }) => {
  return (
    <div className="flex w-[800px]">
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
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
