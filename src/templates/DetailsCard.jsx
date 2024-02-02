import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "../components/LoadingComp";

const DetailsCard = () => {
  const { id } = useParams();
  const [activityDetails, setActivityDetails] = useState();
  const [loading, setLoading] = useState(true);

  console.log(activityDetails);
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
      .then((response) => response.json())
      .then((response) => setActivityDetails(response))
      .catch((err) => console.error(err));
    setLoading(false);
  }, []);

  return (
    <section>
      {loading ? (
        <LoadingComp />
      ) : (
        activityDetails && (
          <section key={activityDetails.id}>
            <img
              src={activityDetails.asset.url}
              alt={activityDetails.className}
            />
            <h2>{activityDetails.className}</h2>
            <p>
              {activityDetails.classDay} - {activityDetails.classTime}
            </p>
            <p>{activityDetails.classDescription}</p>
            <h4>Trainer</h4>
            {/* Her skal træner billede ind hentes fra all trainers som filtrer og sammenligner træner id */}
            <p>{activityDetails.trainer.trainerName}</p>
          </section>
        )
      )}
    </section>
  );
};

export default DetailsCard;
