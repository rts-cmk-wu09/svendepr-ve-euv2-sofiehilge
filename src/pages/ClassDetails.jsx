import { Link } from "react-router-dom";
import DetailsCard from "../templates/DetailsCard";

const ClassDetails = () => {
  return (
    <>
      <DetailsCard/>
      <Link to="/login">  <p>SIGN UP</p>
      </Link>
    
    </>
  );
};

export default ClassDetails;
