const Button = ({ children }) => {
  return (
    <div className="bg-secondary p-2 gap-2 whitespace-nowrap md:text-base shadow-2xl font-inter text-sm text-primary rounded-b-full rounded-e-full md:w-40 w-36 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Button;
