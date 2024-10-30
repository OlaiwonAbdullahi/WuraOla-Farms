import Button from "../components/Button";
const ContactForm = () => {
  return (
    <div className=" flex">
      <div className="">
        <img src="https://placehold.co/600x400/png" alt="" />
      </div>
      <div className=" bg-gray-100 w-full flex flex-col gap-2">
        <div className="">
          <h2 className=" text-secondary font-kanit  text-lg text-center  px-2 ">
            Get In Touch
          </h2>
          <span className=" text-center flex mx-auto justify-center text-3xl font-inter text-secondary font-semibold">
            Send Us A Message
          </span>
        </div>
        <form
          action=""
          className=" flex flex-col gap-3 justify-center items-center"
        >
          <input
            type="text"
            placeholder=" Your Name"
            className=" w-1/3 h-10 rounded-md text-sm p-2 focus:outline-none text-black placeholder:text-black"
          />
          <input
            type="email"
            placeholder=" Your Email"
            className=" w-1/3 h-10 rounded-md text-sm p-2 focus:outline-none text-black placeholder:text-black"
          />

          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className="w-1/3 h-28  rounded-md text-sm p-2 focus:outline-none text-black placeholder:text-black"
          />
        </form>
        <div className="">
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
