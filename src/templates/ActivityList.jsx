import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingComp from "../components/LoadingComp";

const ActivityList = ({ activities }) => {
  const [activityList, setActivityList] = useState();
  console.log(activityList);

  /* ---------Get all activities------ */
  useEffect(() => {
    const getActivityList = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    fetch("http://localhost:4000/api/v1/classes", getActivityList)
      .then((response) => response.json())
      .then((response) => setActivityList(response))
      .catch((err) => console.error(err));
  }, []);
  /* Loading statement */
  if (!activityList || !activityList.length) {
    return <LoadingComp />;
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
      <p>activityList</p>
    </>
  );
};

export default ActivityList;
