import { FaBullseye } from "react-icons/fa";
import banana from "../assets/banana.jpeg";

const Mission = () => {
  return (
    <div className="flex w-2/3 mx-auto">
      <div className="basis-1/2 bg-gray-100 flex flex-col items-center p-4 rounded-lg">
        <div className="relative w-1/2">
          <img src={banana} alt="banana" className="w-full rounded-t-lg" />
          <FaBullseye className="absolute inset-0 mx-auto top-24 text-secondary text-3xl " />
        </div>
        <span className=" text-secondary font-semibold font-kanit text-2xl pt-2">
          Our Mission
        </span>
        <p className="text-center text-sm bg-gray-100 p-2 rounded-b-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          officia saepe vitae dolor architecto libero id? Maiores sint ipsam
          facilis? Fugiat, adipisci libero laudantium animi dignissimos unde
          pariatur maiores ducimus!
        </p>
      </div>
      <div className="basis-1/2 bg-gray-100 flex flex-col items-center p-4 rounded-lg">
        <div className="relative w-1/2">
          <img src={banana} alt="banana" className="w-full rounded-t-lg" />
          <FaBullseye className="absolute inset-0 mx-auto top-24 text-secondary text-3xl " />
        </div>
        <span className=" text-secondary font-semibold font-kanit text-2xl pt-2">
          Our Vision
        </span>
        <p className="text-center text-sm bg-gray-100 p-2 rounded-b-lg ">
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
