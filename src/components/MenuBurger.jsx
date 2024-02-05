import React from "react";
import { useState } from "react";

const MenuBurger = () => {
  const { isClicked, setIsClicked } = useState(false);
  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <button
        className="button-burger w-40 h-40 bg-transparent fixed) "
        onClick={handleMenuClick}
      >
        <span className="burger-bar"></span>
      </button>
    </>
  );
};

export default MenuBurger;
