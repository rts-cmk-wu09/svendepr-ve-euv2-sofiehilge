import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";
import LikeStarSmall from "../components/LikeStarSmall";
import useTextLimit from "../hooks/useTextLimit";

const ActivityListFetch = ({ activities }) => {
  // Fetch data using custom hook
  const {
    getData: activityList,
    loading,
    error,
  } = useGetData("http://localhost:4000/api/v1/classes");

  /* Loading statement */
  if (loading) {
    return <LoadingComp/>;
  }

  if (error) {
    return <ErrorComp />;
  }

  const allActivityList = activities || activityList;
//filter out duplicate activities by className
const uniqueActivityList = allActivityList.reduce((uniqueList, currentActivity) => {
  //check if current activity's className is already in uniqueList
  const isDuplicate = uniqueList.some(activity => activity.className === currentActivity.className);

  //If its not a duplicate, add it to the uniqueList
  if(!isDuplicate) {
    uniqueList.push(currentActivity);
  }
  return uniqueList;
}, []);

  return (
    <div style={{display: "flex", width: "375px", overflowX: "auto"}}>
      {uniqueActivityList.map((item) => (
        <Link key={item.id} to={`/classdetails/${item.id}`}>
          <article
            className={"relative w-[128px] h-[144.87px] rounded-[16px] mr-[16px]"}
            style={{
              backgroundImage: `url(${item.asset.url})`,
              backgroundSize: "cover",
            }}
          >
            <p className=" absolute bg-primaryColor w-[128px] h-[48px] bottom-0 left-0 font-poppins font-semibold text-xs pl-[16px] pt-[6px] rounded-bl-[16px] rounded-tr-[48px]">
              {useTextLimit(item.className, 12)}
            </p>
            <LikeStarSmall />
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ActivityListFetch;
