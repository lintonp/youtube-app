// import { useEffect } from "react";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { showMenu } from "../Store/MenuSlice";
// import { useSearchParams } from "react-router-dom";

const Body = () => {
  const menuFlag = useSelector((state) => state.menu.show);
  const dispatch = useDispatch();
  // const searchparams = useSearchParams();

  if (window.location.href.endsWith("/")) {
    dispatch(showMenu());
  }
  // useEffect(() => {
  // },[]);

  return (
    <div className="flex">
      {menuFlag && <Menu />}
      <Outlet />
    </div>
  );
};

export default Body;
