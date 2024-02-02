import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";

const RandomActivity = () => {
  //fetch data using custom hook
  const { getData: randomActivities, loading } = useGetData(
    "http://localhost:4000/api/v1/classes"
  );
  /* Loading statement */
  if (loading) {
    return <LoadingComp />;
  }
  //select a random activity from the fetched data
  const randomIndex = Math.floor(Math.random() * randomActivities.length);
  const randomActivity = randomActivities[randomIndex];
  return (
    <>
      <Link to={`/classdetails/${randomActivity.id}`}>
        <article
          className="w-70 h-70"
          style={{
            backgroundImage: `url(${randomActivity.asset.url})`,
            backgroundSize: "cover",
          }}
        >
          <p>{randomActivity.className}</p>
        </article>
      </Link>
    </>
  );
};

export default RandomActivity;
