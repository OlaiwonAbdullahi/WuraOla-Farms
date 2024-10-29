import { FaLeaf } from "react-icons/fa";
import Button from "./Button";
const Getintouch = () => {
  return (
    <div className="bg-[url(/src/assets/cassava.jpeg)] bg-cover">
      <div className=" flex md:justify-between flex-col md:flex-row justify-center mx-auto gap-5 p-3 bg-secondary  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 h-52 ">
        <div className=" flex items-center gap-2 text-3xl justify-center mx-auto font-kanit">
          <FaLeaf className=" h-10 w-10 text-secondary" />
          Get in Touch
        </div>
        <div className=" flex justify-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
