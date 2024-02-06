import {useState, useEffect} from "react";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";

const TrainerList = ({ allClassList }) => {
  //Fetch data using custom hook
  const {
    getData: trainerList,
    loading,
    error,
  } = useGetData("http://localhost:4000/api/v1/trainers");

  const [filteredTrainers, setFilteredTrainers] = useState([]);

  useEffect(() => {
    if(!trainerList || trainerList.length === 0) return;

    //extract trainer IDs from allClassList
    const classTrainerIds = allClassList.map(item => item.trainer.id);

    //filter trainerList based on classTrainerIds
    const filtrered = trainerList.filter(trainer => classTrainerIds.includes(trainer.id));
    setFilteredTrainers(filtrered)
  }, [allClassList, trainerList]);

  /* check loading of trainerlist before maping over */
  if (loading || !trainerList || trainerList.length === 0) {
    return <LoadingComp />;
  }

  if (error) {
    return <ErrorComp message={error} />;
  }

  return (
    <div className="ml-[21px]">
      <h4 className="font-poppins font-bold mt-[48px]">Popular trainers</h4>
      {filteredTrainers.map((item) => (
        <div key={item.id} className="flex flex-row">
          <img src={item.asset.url} alt={item.trainerName} className="w-[88px] h-[88px] object-cover rounded-2xl mt-[20px]"/>
          <p className="font-poppins font-semibold mt-[34px] ml-[16px]" >{item.trainerName}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainerList;
