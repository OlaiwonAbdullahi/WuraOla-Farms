const Team = () => {
  return (
    <div>
      <div className="">
        <h2 className=" text-secondary font-kanit  text-lg text-center  px-2 ">
          Meet Our Team
        </h2>
        <span className=" text-center flex mx-auto justify-center text-3xl font-inter text-secondary font-semibold">
          Our Management
        </span>
      </div>
      <div className="">
        <TeamPics />
      </div>
    </div>
  );
};

export default Team;

//import tom from "../assets/tom.svg";
//import emma from "../assets/emma.svg";
//import will from "../assets/will.svg";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const teamMembers = [
  {
    imgSrc: "https://placehold.co/600x400?text=Mr+Olaiwon",
    name: "Mr Olaiwon",
    role: "Founder & Chairman",
  },
  {
    imgSrc: "https://placehold.co/600x400?text=Mrs+Olaiwon",
    name: "Mrs Olaiwon",
    role: "Managing Director",
  },
  {
    imgSrc: "https://placehold.co/600x400?text=Typeshii",
    name: "Will Smith",
    role: "Product Designer",
  },
];

const TeamPics = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-left ">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-2/3 mb-4 rounded-3xl"
            />
            <h2 className="text-2xl font-semibold text-left font-kanit">
              {member.name}
            </h2>
            <span className="text-sm text-gray-600 text-left font-inter ">
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
