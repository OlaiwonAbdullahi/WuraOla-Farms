import { FaBullseye } from "react-icons/fa";
import banana from "../assets/banana.jpeg";

const Mission = () => {
  return (
    <div className="flex w-2/3 mx-auto">
      <div className="basis-1/2 bg-gray-100 flex flex-col items-center p-4 rounded-lg">
        <img src={banana} alt="banana image" className="w-1/2 rounded-t-lg" />
        <FaBullseye className="text-xl mt-2" />
        <p className="text-center text-sm bg-gray-100 p-2 rounded-b-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          officia saepe vitae dolor architecto libero id? Maiores sint ipsam
          facilis? Fugiat, adipisci libero laudantium animi dignissimos unde
          pariatur maiores ducimus!
        </p>
      </div>
      <div className="basis-1/2"></div> {/* Add content or remove */}
    </div>
  );
};

export default Mission;
