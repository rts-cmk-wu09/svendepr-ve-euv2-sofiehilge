import { Link } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import BurgerMenu from "../templates/BurgerMenu";

const Navigation = ({ text }) => {
  return (
    <>
      <div>
        <BurgerMenu />
        <div className="pl-[21px] pt-[48px] pb-[31px] flex flex-row">
          <div style={{ marginTop: "5px", marginRight: "24px" }}>
            <Link to={"/home"}>
              <ArrowBack color="#898989" className="w-[14px] h-[14px]" />
            </Link>
          </div>
          <h3 className="text-left font-normal leading-normal tracking-normal">
            {text}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Navigation;
