import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const interests = [
  "PTX",
  "Jason Mraz",
  "Taylor Swift",
  "Ed Sheeran",
  "UCL",
  "IPL",
];

const Menu = () => {
  return (
    <div className="w-48 my-2 mx-4 p-2">
      <ul>
        <li className="p-2 hover:shadow-md cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 hover:shadow-md cursor-not-allowed">Shorts</li>
        <li className="p-2 hover:shadow-md cursor-not-allowed">
          Subscriptions
        </li>
        <hr className="my-2" />
        <li className="p-2 hover:shadow-md cursor-not-allowed">Library</li>
        <li className="p-2 hover:shadow-md cursor-not-allowed">Subscription</li>
        <li className="p-2 hover:shadow-md cursor-not-allowed">Watch Later</li>
        <hr className="my-2" />
        {interests.map((item) => (
          <MenuItems key={item} name={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
