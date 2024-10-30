const AboutHeader = () => {
  return (
    <div className="bg-[url(/src/assets/abouthero.jpeg)] bg-cover bg-center flex gap-2 flex-col justify-center bg-primary bg-no-repeat md:h-[50vh] h-[40vh]">
      <div className=" flex flex-col gap-3 bg-black md:h-[50vh] h-[40vh] justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15">
        <h2 className=" text-primary text-4xl text-center font-kanit">
          About Us
        </h2>
        <span className="text-primary text-center font-inter">
          Home | | About Us
        </span>
      </div>
    </div>
  );
};

export default AboutHeader;
