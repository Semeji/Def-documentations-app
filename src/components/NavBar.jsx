import React from "react";
import MenuBurger from "../components/MenuBurger.jsx";

const NavBar = () => {
  return (
    <nav className="">
      <div className=" flex flex-row justify-between gap-12 mx-15">
        <MenuBurger />
        <ul className="flex justify-end  flex-row gap-10 py-5 px-6 text-indigo-700  border-b-2 border-neutral-300   fixed bg-white right-[5%] top-[-0.5%] font-mono  w-[75%]">
          <li>
            <a href="#">Guide utilisateur</a>
          </li>
          <li>
            <a href="#">Doc Comptable</a>
          </li>
          <li>
            <a href="#">Se Connecter</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
