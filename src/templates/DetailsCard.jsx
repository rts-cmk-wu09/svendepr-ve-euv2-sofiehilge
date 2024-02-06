import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";

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
    <section>
      {error && <ErrorComp />}
      {loading && <LoadingComp />}
      {activityDetails && (
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
      )}
    </section>
  );
};

export default DetailsCard;
