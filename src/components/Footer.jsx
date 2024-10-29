import { CiFacebook, CiLinkedin } from "react-icons/ci";
import logo from "../assets/wuraola.png";
const Footer = () => {
  return (
    <div className=" p-2 bg-secondary flex justify-around">
      <div className=" ">
        <div className=" flex flex-col">
          <div className=" flex items-center text-primary text-xl font-kanit">
            <img src={logo} alt="" className=" w-20 h-20" />
            Wuraola Farms
          </div>
          <div className="">
            <p className=" w-52 text-primary font-inter font-light leading-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              facilis!
            </p>
          </div>
        </div>
        <div className="">
          <h2 className=" text-2xl text-primary font-kanit">Follow Us</h2>
          <div className=" flex gap-2 text-primary">
            <CiLinkedin className=" h-6 w-6" />
            <CiFacebook className=" h-6 w-6" />
          </div>
        </div>
      </div>
      <div className=" text-primary font-inter pt-4">
        <h2 className=" text-2xl text-primary font-kanit">Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
