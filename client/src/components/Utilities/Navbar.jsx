import React, { useContext, useEffect, useState } from "react";
import { showName } from "../../logic/NameShow";
import { Link, Outlet } from "react-router-dom";
import { MyContext } from "../../context/MyConext";


const Navbar = () => {
  const [user, setUser] = useState({});
  const {showNameBool} = useContext(MyContext)

  useEffect(() => {
    const data = showName();
    setUser(data);
  }, [showNameBool]);

  return (
    <header className="p-4">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-white" // Changed to white for contrast
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-8 h-8 text-violet-400" // A bright accent color
          >
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319-0.185 0.529-0.527 0.529-0.916z"></path>
          </svg>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/"
              className="flex items-center px-4 text-white border-b-2 border-transparent hover:text-violet-400 hover:border-violet-400"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="products"
              className="flex items-center px-4 text-white border-b-2 border-transparent hover:text-violet-400 hover:border-violet-400"
            >
              products
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="about"
              className="flex items-center px-4 text-white border-b-2 border-transparent hover:text-violet-400 hover:border-violet-400"
            >
              about
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="contact"
              className="flex items-center px-4 text-white border-b-2 border-transparent hover:text-violet-400 hover:border-violet-400"
            >
              contack
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="cart"
              className="flex items-center px-4 text-white border-b-2 border-transparent hover:text-violet-400 hover:border-violet-400"
            >
              cart
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="flex items-center px-4 text-white border-b-2 border-transparent hover:text-violet-400 hover:border-violet-400"
            >
              history
            </Link>
          </li>
        </ul>
        {Object.keys(user).length == 0 ? (
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link
              className="self-center mx-3 px-8 py-3 text-white bg-transparent border border-white rounded hover:bg-violet-400 hover:border-violet-400"
              to="/login"
            >
              Sign in
            </Link>
            <Link
              className="self-center px-8 py-3 font-semibold text-gray-800 bg-violet-400 rounded hover:bg-violet-600"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link
              className="self-center text-xl mx-3 px-8 py-3 text-white bg-transparent rounded hover:bg-violet-400 hover:border-violet-400"
              to="/"
            >
              Hello, <b>{user.name}</b>
            </Link>
            <Link
              className="self-center px-8 py-3 font-semibold text-gray-800 bg-violet-400 rounded hover:bg-violet-600"
              to="/login"
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
