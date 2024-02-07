import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";
import LikeStarRate from "../components/LikeStarRate";

const DetailsCard = () => {
  const { id } = useParams();
  const [activityDetails, setActivityDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ----- get activity details---- */
  useEffect(() => {
    const getActivityDetails = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    setLoading(true);
    fetch(`http://localhost:4000/api/v1/classes/${id}`, getActivityDetails)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setActivityDetails(response);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className="w-[375px] h-[812px]">
      {error && <ErrorComp />}
      {loading && <LoadingComp />}
      {activityDetails && (
        <section key={activityDetails.id}>
          <div className="relative">
            <div className="relative top-197 left-0 w-375 h-235 bg-gradient-to-b from-white to-gray-700 bg-blend-multiply opacity-100">
              <img
                src={activityDetails.asset.url}
                alt={activityDetails.className}
                className="w-[375px] h-[432px] object-cover overflow-hidden"
              />
            </div>
            <div className="px-[12px]">
              <h2 className="absolute font-poppins font-bold top-[244px] text-shadow-xs pb-[32px] mb-[32px]">
                {activityDetails.className}
              </h2>
              <LikeStarRate />
            </div>
          </div>

          <p>
            {activityDetails.classDay} - {activityDetails.classTime}
          </p>
          <p>{activityDetails.classDescription}</p>
          <h4>Trainer</h4>
          {/* Her skal træner billede ind hentes fra all trainers som filtrer og sammenligner træner id */}
          <p>{activityDetails.trainer.trainerName}</p>
        </section>
      )}
    </section>
  );
};

export default DetailsCard;
