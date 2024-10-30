const Whoweare = () => {
  return (
    <div className=" flex justify-around p-4 w-4/5 mx-auto flex-col md:flex-row">
      <div className=" basis-1/3">
        <h2 className=" text-secondary font-kanit font-semibold text-2xl border-l-4 px-2 border-green-300">
          About Us
        </h2>
        <span className=" text-4xl font-kanit text-secondary">Who We Are</span>
      </div>
      <div className="basis-2/3 text-center md:text-left font-inter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore
        exercitationem repellat ipsa officiis quia doloribus possimus officia
        perspiciatis ab sunt suscipit fuga dolores consectetur voluptates atque,
        dicta quisquam voluptate.
      </div>
    </div>
  );
};

export default Whoweare;
