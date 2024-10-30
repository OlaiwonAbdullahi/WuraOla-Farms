const AboutHeader = () => {
  return (
    <div className="bg-[url(/src/assets/abouthero.jpeg)] bg-cover bg-center flex gap-2 flex-col justify-center bg-primary bg-no-repeat md:h-[50vh] h-[40vh]">
      <h2 className=" text-primary text-4xl text-center font-kanit">
        About Us
      </h2>
      <span className="text-primary text-center font-inter">
        Home | | About Us
      </span>
    </div>
  );
};

export default AboutHeader;
