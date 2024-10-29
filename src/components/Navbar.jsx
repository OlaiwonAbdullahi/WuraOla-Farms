import { CiMenuFries, CiShoppingCart } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import logo from "../assets/wuraolalogo.png";
const Navbar = () => {
  return (
    <>
      <div className=" flex items-center justify-between p-3 font-kanit border-b">
        <div className="">
          <img src={logo} alt="" className=" md:w-20 md:h-20 h-16 w-16 " />
        </div>
        <div className=" md:flex hidden ">
          <ul className=" flex gap-4">
            <li className=" text-secondary">Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className=" flex items-center">
          <div className=" p-3 flex">
            <CiShoppingCart className=" h-7 w-7" />
            <span className=" text-sm bg-secondary text-primary h-5 p-1 items-center flex rounded-full">
              2
            </span>
          </div>
          <div className=" md:hidden flex">
            <CiMenuFries className=" h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-50 flex  justify-center flex-col  bg-black text-gray-100">
        <div className="">
          <button
            className="absolute top-4 self-end right-0 text-xl"
            // onClick={closeMenu}
          >
            <LiaTimesSolid className="h-6 w-6" />
          </button>
        </div>
        <Nav />
      </div>
    </>
  );
};

export default Navbar;

function Nav() {
  return (
    <div className=" flex md:hidden font-kanit justify-center text-center text-2xl relative">
      <div className="">
        <ul className=" flex flex-col gap-3">
          <li className=" text-secondary">Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
