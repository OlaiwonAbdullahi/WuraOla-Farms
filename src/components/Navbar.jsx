import { CiShoppingCart } from "react-icons/ci";
import logo from "../assets/wuraolalogo.png";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-between p-3 font-kanit">
      <div className="">
        <img src={logo} alt="" className=" w-24 h-24" />
      </div>
      <div className="">
        <ul className=" flex gap-3">
          <li className=" text-secondary">Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <CiShoppingCart className=" h-7 w-7" />
      </div>
    </div>
  );
};

export default Navbar;
