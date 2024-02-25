import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className=" px-[10%] bg-none flex justify-between items-center mt-3">
        <div className="h-8">
          <img src={logo} alt="A logo" />
        </div>
        <div className={`md:flex ${isOpen ? "flex" : "hidden"}`}>
          <ul
            className=" text-black
           flex font-sans font-normal text-xl"
          >
            <NavLink to="/">
              <li className="m-4">Home</li>
            </NavLink>
            <NavLink to={"/recipe"}>
              <li className="m-4">Recipes</li>
            </NavLink>
            <li className="m-4">Blog</li>
            <li className="m-4">Contact</li>
            <li className="m-4">About Us</li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-black hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Nav;
