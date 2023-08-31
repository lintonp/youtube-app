import React from "react";

const Button = ({ name }) => {
  return (
    <button className="py-1 px-2 m-2 text-sm rounded-md bg-slate-200 whitespace-nowrap hover:bg-slate-300">
      {name}
    </button>
  );
};

export default Button;
