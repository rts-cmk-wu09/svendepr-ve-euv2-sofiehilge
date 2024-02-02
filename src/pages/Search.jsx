import { useEffect, useState } from "react";
import LoadingComp from "../components/LoadingComp";
import ActivityList from "../templates/ActivityList";

const Search = () => {
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
    if (!trainerList || trainerList.length === 0){
        return <LoadingComp/>;
    }
  return (
    <>
      <h1>Search</h1>
      <p>Search classes</p>
      <h4>Popular classes</h4>
      <ActivityList/>
      <h4>Popular Trainers</h4>
      {trainerList.map((item) => (
        <p key={item.id}>{item.trainerName}</p>
      ))}
    </>
  );
};

export default Search;
