import { useState } from "react";
import LoadingComp from "./LoadingComp";

const Button = (props) => {
  const { text, width } = props;
  const [clicked, setClicked] = useState(false);

  const buttonStyle = {
    width: width || "auto",
    border: clicked ? "2px solid black" : "none",
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 5000);
  };
  return (
    <>
      <button
        style={buttonStyle}
        className="bg-primaryColor h-[50px] rounded-full opacity-100 uppercase text-[14px] font-semibold text-center px-[28px] py-[15px]"
        onClick={handleClick}
      >
        {text}
      </button>
      {clicked && <LoadingComp />}
    </>
  );
};

export default Button;
