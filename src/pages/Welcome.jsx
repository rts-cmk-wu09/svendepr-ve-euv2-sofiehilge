import { Link } from "react-router-dom";
import welcome from "../assets/image/welcome.jpg";
import welcomebottom from "../assets/image/welcomebottom.jpg";
import Button from "../components/Button";
import Hero from "../components/Hero";
import SecondaryHero from "../components/SecondaryHero";

const Welcome = () => {
  return (
    <>
      <article className="relative w-[375px] h-[821px] overflow-hidden">
        <div className="absolute left-0 w-full h-full">
          <img
            src={welcome}
            alt="runer"
            className="w-full h-full object-cover object-center transform scale-[100%]"
          />
        </div>
        <div className="absolute left-0 w-full h-full bg-black bg-opacity-20"></div>
        <div className="absolute bottom-[40px] left-0 w-full h-1/2">
          <img
            src={welcomebottom}
            alt="weightlifting"
            className="w-full h-full "
            style={{ objectFit: "contain" }}
          />
        </div>

        <Hero
          text={"believe yourself"}
          absoluteValue={{ left: "0", top: "290px" }}
        />
        <SecondaryHero
          color={"#FFF"}
          bgColor={"#FFF"}
          text={"Train like a pro"}
          absoluteValue={{ left: "0", top: "290px" }}
        />

        <div className="absolute top-[675px] ml-[99px]">
          <Link to="/home">
            <Button text={"start training"} width="178px" />
          </Link>
        </div>
      </article>
    </>
  );
};

export default Welcome;
