import Menu from "./Menu";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const menuFlag = useSelector((state) => state.menu.show);

  return (
    <div className="flex">
      {menuFlag && <Menu />}
      <Outlet />
    </div>
  );
};

export default Body;
