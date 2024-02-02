import { Link } from "react-router-dom";
import welcome from "../assets/image/welcome.jpg";
import welcomebottom from "../assets/image/welcomebottom.jpg";
import Button from "../components/Button";

const Welcome = () => {
  return (
    <>
      <article className="relative w-[375px] h-[812px] overflow-hidden">
        <div className="absolute top-[180px] left-0 w-full h-1/2">
          <img
            src={welcome}
            alt="runer"
            className="w-full h-full object-cover object-center transform scale-[190%]"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2" >
          <img
            src={welcomebottom}
            alt="weightlifting"
            className="w-full h-full "
            style={{objectFit: "contain"}}
          />
        </div>
        <div className="flex pt-[50%]">
          <h1 className="absolute font-bold pl-[46px]">Believe Yourself</h1>
          <div className="absolute flex flex-row pt-40">
            <span
              className="inline-block bg-white h-2 w-[31.05] mt-4"
              style={{
                display: "inline-block",
                backgroundColor: "white",
                height: "2px",
                width: "31.05px",
              }}
            ></span>
            <h5 className="font-bold pl-[18px]">Train like a pro</h5>
          </div>
        </div>
        <div className="absolute top-[714px] mr-auto ml-auto">

        <Link to="/home">
         <Button text={"start training"}/>
        </Link>
        </div>
      </article>
    </>
  );
};

export default Welcome;
