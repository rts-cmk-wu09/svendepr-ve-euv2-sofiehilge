const Button = (props) => {
  const { text, width } = props;

  const buttonStyle = {
    width: width || "auto",
  };
  return (
    <button
      style={buttonStyle}
      className="bg-primaryColor h-[50px] rounded-full opacity-100 uppercase text-[14px] font-semibold text-center px-[28px] py-[15px] transition-all duration-300 ease-in-out transform focus:scale-105"
    >
      {text}
    </button>
  );
};

export default Button;
