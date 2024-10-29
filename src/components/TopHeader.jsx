import { PiMapPinAreaThin, PiPhoneThin } from "react-icons/pi";
import { CiFacebook, CiLinkedin, CiMail } from "react-icons/ci";
const TopHeader = () => {
  return (
    <div className="bg-secondary font-inter flex-col md:flex-row text-primary p-2 font-extralight flex justify-between px-4">
      <div className=" flex gap-4 flex-col  md:flex-row">
        <div className=" flex items-center gap-2 text-sm">
          <PiMapPinAreaThin className=" w-5 h-5" />
          Lorem ipsum dolor sit amet.
        </div>
        <div className=" flex items-center gap-2 text-sm">
          <CiMail className=" w-5 h-5" />
          Lorem ipsum dolor sit amet.
        </div>
        <div className=" flex items-center gap-2 text-sm">
          <PiPhoneThin className=" w-5 h-5" />
          +234(0)812 3456 789
        </div>
      </div>
      <div className=" flex gap-2">
        <CiLinkedin className=" h-6 w-6" />
        <CiFacebook className=" h-6 w-6" />
      </div>
    </div>
  );
};

export default TopHeader;
