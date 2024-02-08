import DetailsCard from "../templates/DetailsCard";
import SignUpButtonFetch from "../components/SignUpButtonFetch";

const ClassDetails = () => {
  return (
    <>
      <DetailsCard />
      <div className="px-[20px]">
        <SignUpButtonFetch />
      </div>
    </>
  );
};

export default ClassDetails;

//I need to pass the weekday from detailsCard to signUpButtonFetchMatch and then compare in the sign up
