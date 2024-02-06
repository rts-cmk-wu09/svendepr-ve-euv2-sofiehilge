import { FaStar } from "react-icons/fa";

const LikeStarSmall = () => {
  return (
    <span className="flex flex-row absolute bottom-0 left-0 pl-[16px] pb-[9px] pr-[8.43px]  ">
      <FaStar className="mr-[6.43px]" />
      <FaStar className="mr-[6.43px]" />
      <FaStar className="mr-[6.43px]" />
      <FaStar className="mr-[6.43px]" />
      <FaStar className="mr-[6.43px]" />
    </span>
  );
};

export default LikeStarSmall;
