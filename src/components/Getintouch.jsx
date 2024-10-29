import { FaLeaf } from "react-icons/fa";
import Button from "./Button";
const Getintouch = () => {
  return (
    <div className="bg-[url(/src/assets/cassava.jpeg)] bg-cover text-primary bg-center bg-primary bg-no-repeat rounded-t-2xl md:rounded-none">
      <div className=" flex md:justify-between flex-col md:flex-row justify-center items-center mx-auto gap-5 p-3 bg-secondary rounded-t-3xl md:rounded-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 h-52 ">
        <div className=" flex items-center gap-2 md:text-5xl text-3xl justify-center md:justify-start  font-kanit">
          <FaLeaf className=" h-10 w-10 md:size-14 text-primary" />
          Get in Touch
        </div>
        <div className=" flex justify-center  h-16 items-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
