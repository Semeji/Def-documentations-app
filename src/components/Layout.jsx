import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import SideBar from "../pages/SideBar.jsx";
import Screens from "../pages/Screens.jsx";

const Layout = () => {
  return (
    <>
      <div className="sm:text-mg flex items-center justify-end text flex-row  w-screen h-screen text-stone-700 gap-2 font-serif  ">
        <SideBar />
        <div className="flex items-center justify-between gap-8  flex-1 flex-col py-[-10%]  min-h-10 ">
          <NavBar classeName="flex  visible children" />
          <Outlet classeName="flex   visible children" />
          <section className=" px-12 left-[70%] top-20 fixed">
            <Screens />
          </section>
        </div>
      </div>
    </>
  );
};

export default Layout;
