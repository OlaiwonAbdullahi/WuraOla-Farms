import { FaLeaf } from "react-icons/fa";
import Button from "./Button";
const Getintouch = () => {
  return (
    <div className=" flex justify-between">
      <div className=" flex items-center gap-2">
        <FaLeaf className=" h-10 w-10 text-secondary" />
        Get in Touch
      </div>
      <div className="">
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Getintouch;
