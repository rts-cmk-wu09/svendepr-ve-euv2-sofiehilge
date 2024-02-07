import { Link } from "react-router-dom";
import ActivityListFetch from "../templates/ActivityListFetch";
import RandomActivity from "../templates/RandomActivity";
import BurgerMenu from "../templates/BurgerMenu";

const Home = () => {
  return (
    <div className="w-[375px] flex flex-col">
      <BurgerMenu />
      <div className=" flex flex-row">
        <h3 className="text-left font-normal leading-normal tracking-normal pl-[21px] pt-[48px]">
          Popular classes
        </h3>
      </div>
      <div className="mx-[20px]">
        <RandomActivity />
        <h4 className="font-poppins font-bold mt-[48px] mb-[16px]">
          Classes for you
        </h4>
        <ActivityListFetch />
      </div>
    </div>
  );
};

export default Home;
