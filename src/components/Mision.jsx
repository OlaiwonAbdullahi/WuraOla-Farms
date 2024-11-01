import { FaBullseye, FaRegEye } from "react-icons/fa";
import banana from "../assets/banana.jpeg";

const Mission = () => {
  return (
    <div className="flex md:w-2/3 w-full mx-auto flex-col gap-4 md:flex-row p-4 md:p-0 mb-3">
      <div className="md:basis-1/2 basis-full   flex flex-col items-center rounded-lg">
        <div className="relative md:w-1/2 w-full bg-gray-100 rounded-t-lg">
          <img src={banana} alt="banana" className="w-full rounded-t-lg" />
          <FaBullseye className="absolute inset-0 mx-auto top-24 text-secondary text-5xl " />
        </div>
        <span className=" bg-gray-100 md:w-1/2 w-full text-center text-secondary font-semibold font-kanit text-2xl pt-6">
          Our Mission
        </span>
        <p className="text-center md:w-1/2 w-full  font-inter font-light text-sm bg-gray-100 p-2 rounded-b-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          officia saepe vitae dolor architecto libero id? Maiores sint ipsam
          facilis? Fugiat, adipisci libero laudantium animi dignissimos unde
          pariatur maiores ducimus!
        </p>
      </div>
      <div className="basis-1/2   flex flex-col items-center rounded-lg">
        <div className="relative  md:w-1/2 w-full bg-gray-100 rounded-t-lg">
          <img src={banana} alt="banana" className="w-full rounded-t-lg" />
          <FaRegEye className="absolute inset-0 mx-auto top-24 text-secondary text-5xl " />
        </div>
        <span className=" bg-gray-100  md:w-1/2 w-full text-center text-secondary font-semibold font-kanit text-2xl pt-6">
          Our Vision
        </span>
        <p className="text-center  md:w-1/2 w-full  font-inter font-light text-sm bg-gray-100 p-2 rounded-b-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          officia saepe vitae dolor architecto libero id? Maiores sint ipsam
          facilis? Fugiat, adipisci libero laudantium animi dignissimos unde
          pariatur maiores ducimus!
        </p>
      </div>
    </div>
  );
};

export default Mission;
