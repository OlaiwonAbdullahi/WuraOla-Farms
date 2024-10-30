import { CiMail, CiMap, CiPhone } from "react-icons/ci";

const Location = () => {
  return (
    <div className=" bg-white p-4 flex md:justify-around items-center gap-5 flex-col md:flex-row justify-center">
      <div className=" bg-gray-100 p-2 rounded-md w-48 flex flex-col justify-center items-center h-36">
        <CiMail className=" size-8 text-secondary bg-white p-1 rounded-full shadow-md shadow-secondary/25" />
        <h2 className="text-xl text-secondary font-kanit ">Email Address</h2>
        <span className=" text-sm font-inter">qwertyui@gmail.com</span>
      </div>
      <div className=" bg-gray-100 p-2 rounded-md w-48 flex flex-col justify-center items-center h-36">
        <CiMap
          className=" size-8 text-secondary bg-white p-1 rounded-full
        shadow-md shadow-secondary/25"
        />
        <h2 className="text-xl text-secondary font-kanit ">Main Office</h2>
        <span className=" text-sm font-inter">qwerty street</span>
      </div>
      <div className=" bg-gray-100 p-2 rounded-md w-48 flex flex-col justify-center items-center h-36">
        <CiPhone className=" size-8 text-secondary bg-white p-1 rounded-full shadow-md shadow-secondary/25" />
        <h2 className="text-xl text-secondary font-kanit ">Phone Number</h2>
        <span className=" text-sm font-inter">+234(0) 81 2345 678</span>
      </div>
    </div>
  );
};

export default Location;
