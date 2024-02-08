import { useState, useEffect } from "react";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";
import { Link } from "react-router-dom";
import NoResults from "../components/NoResults";
const TrainerList = ({ searchQuery }) => {
  //Fetch data using custom hook
  const {
    getData: trainerList,
    loading,
    error,
  } = useGetData("http://localhost:4000/api/v1/trainers");

  const [filteredTrainers, setFilteredTrainers] = useState([]);

  useEffect(() => {
    console.log("Search Query:", searchQuery);
    console.log("Trainer List:", trainerList);
    if (!trainerList || trainerList.length === 0) {
      setFilteredTrainers([]);
      return;
    }

    //Filter out duplicate trainers by trainerName
    const uniqueTrainerList = trainerList.reduce(
      (uniqueList, currentTrainer) => {
        //check if the current train's trainerName is already in the uniqueList
        const isDuplicate = uniqueList.some(
          (trainer) => trainer.trainerName === currentTrainer.trainerName
        );
        //if it is not a duplicate, add to the uniqueList
        if (!isDuplicate) {
          uniqueList.push(currentTrainer);
        }
        return uniqueList;
      },
      []
    );

    //if searchQuery is empty, render the full list of trainers
    if (!searchQuery) {
      setFilteredTrainers(uniqueTrainerList);
      return;
    }

    //filter trainerList based on searchquery
    const filtered = uniqueTrainerList.filter((trainer) =>
      trainer.trainerName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredTrainers(filtered);
  }, [trainerList, searchQuery]);

  /* check loading of trainerlist before maping over */
  if (loading || !trainerList) {
    return <LoadingComp />;
  }

  if (error) {
    return <ErrorComp />;
  }

  return (
    <div className="ml-[21px]">
      <h4 className="font-poppins font-bold mt-[48px] mb-[20px]">Popular trainers</h4>
      {filteredTrainers.length === 0 ? (
        <NoResults />
      ) : (
        filteredTrainers.map((item) => (
          <Link key={item.id} to={"/home"}>
            <div className="flex flex-row">
              <img
                src={item.asset.url}
                alt={item.trainerName}
                className="w-[88px] h-[88px] object-cover rounded-2xl mb-[20px]"
              />
              <p className="font-poppins font-semibold mt-[34px] ml-[16px]">
                {item.trainerName}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default TrainerList;
