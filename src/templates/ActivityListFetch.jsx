import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp"

const ActivityListFetch = ({ activities }) => {
   // Fetch data using custom hook
   const { getData: activityList, loading, error } = useGetData(
    "http://localhost:4000/api/v1/classes"
  );

  /* Loading statement */
  if (loading) {
    return <LoadingComp />;
  }

  if (error) {
    return <ErrorComp />;
  }

  const allActivityList = activities || activityList;

  return (
        <>
          {allActivityList.map((item) => (
            <Link key={item.id} to={`/classdetails/${item.id}`}>
              <article
                className={"w-[128px] h-[144.87px]"}
                style={{
                  backgroundImage: `url(${item.asset.url})`,
                  backgroundSize: "cover",
                }}
              >
                <p className="bg-white">{item.className}</p>
              </article>
            </Link>
          ))}
        </>
  );
};

export default ActivityListFetch;
