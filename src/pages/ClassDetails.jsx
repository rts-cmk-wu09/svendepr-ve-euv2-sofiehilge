import DetailsCard from "../templates/DetailsCard";
import SignUpButtonFetchMatch from "../components/SignUpButtonFetchMatch";

const ClassDetails = () => {
  return (
    <>
      <DetailsCard />
      <div className="px-[20px]">
        <SignUpButtonFetchMatch />
      </div>
    </>
  );
};

export default ClassDetails;

//I need to pass the weekday from detailsCard to signUpButtonFetchMatch and then compare in the sign up