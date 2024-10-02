import {  Drawer } from "@mui/material";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
    
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>

      <li>
        <Link>Browse Skills</Link>
      </li>
      <li>
        <Link>How It Works</Link>
      </li>

      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>FAQ / Help</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
    </>
    
  );
  return (
    <div className="bg-[#DDDDDD] text-[#333333] ">
        <div className="navbar w-[90%] mx-auto">
      <div className="navbar-start">
      <div>
      <div onClick={toggleDrawer(true)} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
      
      <Drawer className="w-[50%]" open={open} onClose={toggleDrawer(false)}>
      <div className="mt-2 p-3 space-y-4">
      <NavLink to="/" className="text-2xl font-bold ">
          Skill-Swap-Network
        </NavLink>
      <ul
            tabIndex={0}
            className="menu menu-sm font-semibold bg-white   "
          >
            {navItems}
          </ul>
      </div>

      </Drawer>
    </div>
        
        
        <NavLink to="/" className="text-2xl font-bold lg:visible invisible">
          Skill-Swap-Network
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar text-4xl"
          >
            <FaRegUserCircle />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black  rounded-box z-[1] mt-3 max-w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>
                <IoIosLogOut />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;






{/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div> */}