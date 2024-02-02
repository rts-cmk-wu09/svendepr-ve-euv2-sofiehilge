import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";

const TrainerList = ({ trainers }) => {
  //Fetch data using custom hook
  const { getData: trainerList, loading } = useGetData(
    "http://localhost:4000/api/v1/trainers"
  );
  /* check loading of trainerlist before maping over */
  if (loading || !trainerList || trainerList.length === 0) {
    return <LoadingComp />;
  }
  return (
    <>
      <h4>Popular trainers</h4>
      {trainerList.map((item) => (
        <p key={item.id}>{item.trainerName}</p>
      ))}
    </>
  );
};

export default TrainerList;
