import React from "react";

const NavBar = () => {
  return (
    <nav className="  mx-15">
      <ul className="flex justify-end text flex-row gap-10 py-10 px-10  border-b-2 border-neutral-300  text-blue-700 fixed bg-white right-16 top-[-0.5%] font-mono w-[78%]">
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
    </nav>
  );
};

export default NavBar;
