import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";
import LikeStarRate from "../components/LikeStarRate";
import BurgerMenu from "../templates/BurgerMenu";
import ArrowBack from "../components/ArrowBack";
import { IoIosArrowRoundBack } from "react-icons/io";

const DetailsCard = () => {
  const { id } = useParams();
  const [activityDetails, setActivityDetails] = useState();
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ----- get activity details---- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const activityResponse = await fetch(
          `http://localhost:4000/api/v1/classes/${id}`
        );
        if (!activityResponse.ok) {
          throw new Error("Failed to fetch activity details");
        }
        const activityData = await activityResponse.json();
        setActivityDetails(activityData);
        //fetch trainers

        const trainersResponse = await fetch(
          "http://localhost:4000/api/v1/trainers"
        );
        if (!trainersResponse.ok) {
          throw new Error("Failed to fetch trainers");
        }

        const trainersData = await trainersResponse.json();

        //filter trainers data to find the matching trainer
        const matchingTrainer = trainersData.find(
          (trainer) => trainer.id === activityData.trainerId
        );
        if (!matchingTrainer) {
          throw new Error("Matching trainer not found");
        }

        setTrainers([matchingTrainer]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className="w-[375px]">
      {error && <ErrorComp />}
      {loading && (
        <LoadingComp className="absolute top-0 left-0 w-[375px] h-[432px] flex justify-center items-center" />
      )}
      {activityDetails && (
        <section key={activityDetails.id}>
          <div className="relative">
            <div className="absolute">
              <Link to={"/home"}>
                <div className="absolute text-white text-xl top-[58px] pl-[21px] font-poppins font-bold">
                  Back
                </div>
              </Link>
              <BurgerMenu />
            </div>
            <div className=" top-197 left-0 w-375 h-235 bg-gradient-to-b from-white to-gray-700 bg-blend-multiply opacity-100">
              <img
                src={activityDetails.asset.url}
                alt={activityDetails.className}
                className="w-[375px] h-[432px] object-cover overflow-hidden"
              />
            </div>
            <div className="mx-[20px]">
              <h2
                className="absolute font-poppins text-left font-bold top-[244px] leading-none tracking-normal text-shadow-lg mb-[32px] w-[188px]"
                style={{ wordWrap: "break-word" }}
              >
                {activityDetails.className}
              </h2>
              <LikeStarRate />
            </div>
          </div>
          <div className="ml-[20px]">
            <p className="font-poppins font-medium mt-[16px]">
              {activityDetails.classDay} - {activityDetails.classTime}
            </p>
            <p className="font-poppins font-medium mt-[16px]">
              {activityDetails.classDescription}
            </p>
            <h4 className="font-poppins font-bold mt-[34px]">Trainer</h4>
            {trainers.map((trainer) => (
              <div key={trainer.id} className="flex flex-row mb-[20px]">
                <div className="w-[88px] h-[88px]  mt-[20px]">
                  <img
                    src={trainer.asset.url}
                    className="object-cover rounded-2xl"
                    alt="trainer profil"
                  />
                </div>
                <p className="font-poppins font-semibold mt-[34px] ml-[16px]">
                  {trainer.trainerName}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default DetailsCard;
