import { CiMenuFries, CiShoppingCart } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import logo from "../assets/wuraolalogo1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function closeMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <div className=" flex items-center z-20 justify-between px-3 sticky top-0 bg-white font-kanit border-b bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80">
        <div className="">
          <img src={logo} alt="" className=" md:w-20 md:h-20 h-16 w-16 " />
        </div>
        <div className=" md:flex hidden ">
          <ul className=" flex gap-4">
            <Link to="/">
              <li className=" text-secondary">Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className=" flex items-center">
          <div className=" p-3 flex">
            <CiShoppingCart className=" h-7 w-7" />
            <span className=" text-sm bg-secondary text-primary h-5 p-1 items-center flex rounded-full">
              2
            </span>
          </div>
          <button
            className=" md:hidden flex"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <CiMenuFries className="h-6 w-6 text-black" />
            ) : (
              <LiaTimesSolid className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="fixed inset-0 z-50 flex  justify-center flex-col  bg-secondary text-black">
          <div className="">
            <button
              className="absolute top-4 self-end right-4 text-xl"
              onClick={closeMenu}
            >
              <LiaTimesSolid className="h-6 w-6 text-primary" />
            </button>
          </div>
          <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      )}
    </>
  );
};

export default Navbar;

function Nav({ openMenu, setOpenMenu }) {
  return (
    <div className=" flex md:hidden font-kanit justify-center text-center text-2xl relative ">
      <div className="">
        <ul className=" flex flex-col gap-3">
          <Link to="/">
            <li
              className=" text-primary"
              onClick={() => setOpenMenu(!openMenu)}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li onClick={() => setOpenMenu(!openMenu)}>About</li>
          </Link>
          <Link to="/shop">
            <li onClick={() => setOpenMenu(!openMenu)}>Shop</li>
          </Link>
          <Link to="/contact">
            <li onClick={() => setOpenMenu(!openMenu)}>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
