/* eslint-disable react/no-unescaped-entities */
import "./NavbarII.css";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";


import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

//profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    link: "/SignIn",
  },
];
 

const NavbarII = () => {
const [toggleMenu, setToggleMenu] = React.useState(false);
const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
const closeMenu = () => setIsMenuOpen(false);   
return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <a href="#home">

      <h1 className="text-white text-lg font-black pl-14">HAVEN'S</h1>
      </a>
    </div>

    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home"> Home</a>
      </li>
      {/* <li className="p__opensans">
        <a href="#home">About</a>
      </li> */}
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#gallery">Gallery</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contacts</a>
      </li>
    </ul>

    <div className="app__navbar-login">
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            withBorder={true}
            color="blue-gray"
            className=" p-0.5"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
      <div />
      {/* <a href="/" className="p__opensans">
        Book Table
      </a> */}
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu
        color="#fff"
        fontSize={27}
        onClick={() => setToggleMenu(true)}
        className="hamburger"
      />

{toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
        <MdOutlineRestaurantMenu
          color="#fff"
          fontSize={27}
          className="overlay__close"
          onClick={() => setToggleMenu(false)}
        />
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          {/* <li className="p__opensans">
            <a href="#home">About</a>
          </li> */}
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="p__opensans">
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </div>
)}

    </div>
  </nav>
)
}

export default NavbarII;
