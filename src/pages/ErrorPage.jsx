import Navigation from "../templates/Navigation";
import Hero from "../components/Hero";
import SecondaryHero from "../components/SecondaryHero";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <Hero text={"Sorry something went wrong"} />
      <SecondaryHero
        text={"Please go back to home"}
        color={"#000"}
        bgColor={"#000"}
      />
      <div className="px-[20px] pt-[40px]">
        <Link to={"/home"}>
          <Button text={"Home"} width={"334px"} />
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
