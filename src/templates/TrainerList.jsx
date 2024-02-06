import { useState, useEffect } from "react";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";
import { Link } from "react-router-dom";
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

    //if searchQuery is empty, render the full list of trainers
    if (!searchQuery) {
      setFilteredTrainers(trainerList);
      return;
    }

    //filter trainerList based on searchquery
    const filtered = trainerList.filter((trainer) =>
      trainer.trainerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("Filtered trainerS:", filtered);
    setFilteredTrainers(filtered);
  }, [trainerList, searchQuery]);

  /* check loading of trainerlist before maping over */
  if (loading || !trainerList || trainerList.length === 0) {
    return <LoadingComp />;
  }

  if (error) {
    return <ErrorComp />;
  }

  //determine which list to display based on search query
  const displayList =
    searchQuery.trim() == "" || filteredTrainers.length === 0
      ? trainerList
      : filteredTrainers;

  return (
    <div className="ml-[21px]">
      <h4 className="font-poppins font-bold mt-[48px]">Popular trainers</h4>
      {displayList.map((item) => (
        <Link key={item.id} to={"/home"}>
          <div  className="flex flex-row">
            <img
              src={item.asset.url}
              alt={item.trainerName}
              className="w-[88px] h-[88px] object-cover rounded-2xl mt-[20px]"
            />
            <p className="font-poppins font-semibold mt-[34px] ml-[16px]">
              {item.trainerName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TrainerList;
