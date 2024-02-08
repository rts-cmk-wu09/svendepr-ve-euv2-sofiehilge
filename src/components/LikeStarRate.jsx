import { useState } from "react";
import { FaStar } from "react-icons/fa";

const LikeStar = () => {
  const [clicked, setClicked] = useState(false);

  const handleRateClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };
  return (
    <div className="flex flex-row items-center absolute bottom-0 left-0 pl-[20px] pr-[8.43px]">
      <div className="flex flex-row">
        <FaStar className="mr-[8.43px] text-primaryColor" />
        <FaStar className="mr-[8.43px] text-primaryColor" />
        <FaStar className="mr-[8.43px] text-primaryColor" />
        <FaStar className="mr-[8.43px] text-primaryColor" />
        <FaStar className="mr-[8.43px] text-primaryColor" />
        <p className="text-primaryColor">0/0</p>
      </div>
      <div className="ml-[90px] pb-[38px]">
        <button
          className={
            clicked
              ? "border border-black w-[109px] text-primaryColor h-[50px] rounded-full opacity-100 uppercase text-[14px] font-semibold text-center mt-[30px]"
              : "" +
                " w-[109px] text-primaryColor border border-[#F1C40E] h-[50px] rounded-full opacity-100 uppercase text-[14px] font-semibold text-center mt-[30px]"
          }
          onClick={handleRateClick}
        >
          Rate
        </button>
      </div>
    </div>
  );
};

export default LikeStar;
