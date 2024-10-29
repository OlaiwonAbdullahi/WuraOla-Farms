import Button from "./Button";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="bg-[url(/src/assets/Hero.jpg)] bg-cover bg-center bg-primary bg-no-repeat md:h-[50vh] h-[40vh]">
      <div className="flex flex-col gap-4 p-6">
        <h2 className="md:text-5xl leading-relaxed whitespace-nowrap md:leading-snug text-4xl text-center md:text-left text-primary font-kanit">
          Nourishing the Land,
          <br /> Feeding the Future
        </h2>
        <p className="leading-snug w-full max-w-lg text-white text-sm font-inter text-center md:text-left flex mx-auto md:mx-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui saepe
          consectetur neque nisi reprehenderit architecto?
        </p>
        <div className="flex gap-4 mx-auto md:mx-0 mt-4">
          <Button>
            Explore Garden <GoArrowRight />
          </Button>
          <Button>
            Learn More <GoArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
