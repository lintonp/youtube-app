import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-48 my-2 mx-4 p-2">
      <ul>
        <li className="p-2 hover:shadow-md">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 hover:shadow-md">Shorts</li>
        <li className="p-2 hover:shadow-md">Subscriptions</li>
        <hr className="my-2" />
        <li className="p-2 hover:shadow-md">Library</li>
        <li className="p-2 hover:shadow-md">Subscription</li>
        <li className="p-2 hover:shadow-md">Watch Later</li>
        <hr className="my-2" />
        <li className="p-2 hover:shadow-md">PTX</li>
        <li className="p-2 hover:shadow-md">Jason Mraz</li>
        <li className="p-2 hover:shadow-md">Taylor Swift</li>
      </ul>
    </div>
  );
};

export default Menu;
