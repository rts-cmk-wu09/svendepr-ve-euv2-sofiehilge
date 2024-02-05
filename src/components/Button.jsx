const Button = (props) => {
  const { text, width } = props;

  const buttonStyle = {
    width: width || "auto",
  };
  return (
    <button
      style={buttonStyle}
      className="bg-primaryColor h-[50px] rounded-full opacity-100 uppercase font-semibold text-center px-[28px] py-[15px]"
    >
      {text}
    </button>
  );
};

export default Button;
