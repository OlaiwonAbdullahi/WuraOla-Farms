import { CiMenuFries, CiShoppingCart } from "react-icons/ci";
import logo from "../assets/wuraolalogo.png";
const Navbar = () => {
  return (
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
        <div className="">
          <CiMenuFries className=" h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
