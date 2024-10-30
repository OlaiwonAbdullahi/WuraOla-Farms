import farmer from "../assets/farmer.jpg";
import Button from "../components/Button";
const ContactForm = () => {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className=" basis-1/3">
        <img src={farmer} alt="" className="w-full h-full" />
      </div>
      <div className=" basis-2/3 bg-gray-100 w-full flex flex-col gap-2 p-5 justify-center">
        <div className="">
          <h2 className=" text-secondary font-kanit  text-lg text-center  px-2 ">
            Get In Touch
          </h2>
          <span className=" text-center flex mx-auto justify-center text-3xl font-inter text-secondary font-semibold">
            Send Us a Message
          </span>
        </div>
        <form
          action=""
          className=" flex flex-col gap-3 justify-center items-center"
        >
          <input
            type="text"
            placeholder=" Your Name"
            className=" md:w-1/3 w-full h-10 rounded-md text-sm p-2 focus:outline-none text-black placeholder:text-black"
          />
          <input
            type="email"
            placeholder=" Your Email"
            className=" md:w-1/3 w-full h-10 rounded-md text-sm p-2 focus:outline-none text-black placeholder:text-black"
          />

          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className="md:w-1/3 w-full h-28  rounded-md text-sm p-2 focus:outline-none text-black placeholder:text-black"
          />
        </form>
        <div className=" w-2/6 mx-auto p-2">
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
