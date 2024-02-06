import Navigation from "../templates/Navigation";
import Hero from "../components/Hero";
import SecondaryHero from "../components/SecondaryHero";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ScheduleCardNoLogin = () => {
  return (
    <div className="ml-[24px]">
      <Hero text={"Please login"} />
      <SecondaryHero
        text={"to see your schedule"}
        color={"#000"}
        bgColor={"#000"}
      />
      <div className="px-[20px] pt-[40px]">
        <Link to={"/login"}>
          <Button text={"login"} width={"334px"} />
        </Link>
      </div>
    </div>
  );
};

export default ScheduleCardNoLogin;
