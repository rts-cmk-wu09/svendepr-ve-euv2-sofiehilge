import { useEffect, useState } from "react";
import LoadingComp from "../components/LoadingComp";

const TrainerList = () => {
  const [trainerList, setTrainerList] = useState();

  /* ---- get all trainers----- */
  useEffect(() => {
    const getTrainerList = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    fetch("http://localhost:4000/api/v1/trainers", getTrainerList)
      .then((response) => response.json())
      .then((response) => setTrainerList(response))
      .catch((err) => console.error(err));
  }, []);
  /* check loading of trainerlist before maping over */
  if (!trainerList || trainerList.length === 0) {
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
