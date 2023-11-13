import React from "react";
import cartImg from "../../assets/icon/2 2.png";
import userImg from "../../assets/icon/Frame.png";
import {
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 text-white flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" className="p-1 text-lg font-extrabold font-Inter">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          HOME
        </a>
      </Typography>
      <Typography as="li" className="p-1 text-lg font-extrabold font-Inter">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          CONTACT US
        </a>
      </Typography>
      <Typography as="li" className="p-1 text-lg font-extrabold font-Inter">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          DASHBOARD
        </a>
      </Typography>
      <Typography as="li" className="p-1 text-lg font-extrabold font-Inter">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Our Shop{" "}
          <span>
            <img className="w-10 h-7 lg:w-14 lg:h-10" src={cartImg} alt="" />
          </span>
        </a>
      </Typography>
      <Typography as="li" className="p-1 text-lg font-extrabold font-Inter">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          SIGN OUT
        </a>
      </Typography>
      <Avatar src={userImg} alt="avatar" withBorder={false} />
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="lg:fixed mx-auto w-full max-w-[1920px]  z-10 px-6 py-3 bg-[#1515157F] ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="mr-4 text-white cursor-pointer py-1.5 font-cinzel">
          <h2 className=" text-3xl font-black ">BISTRO BOSS</h2>
          <h6 className="-mt-2  pl-1 tracking-[9.5px] font-bold text-xl">
            Restaurant
          </h6>
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
};

export default NavBar;
