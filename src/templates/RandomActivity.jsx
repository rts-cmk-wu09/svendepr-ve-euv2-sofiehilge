import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";
import useTextLimit from "../hooks/useTextLimit";
import LikeStar from "../components/LikeStar";

const RandomActivity = () => {
  //fetch data using custom hook
  const {
    getData: randomActivities,
    loading,
    error,
  } = useGetData("http://localhost:4000/api/v1/classes");
  /* Loading statement */
  if (loading) {
    return <LoadingComp />;
  }

  if (error) {
    return <ErrorComp />;
  }
  //select a random activity from the fetched data
  const randomIndex = Math.floor(Math.random() * randomActivities.length);
  const randomActivity = randomActivities[randomIndex];

  //use the useTextLimit hook outside of the Link component
  const limitedText = useTextLimit(randomActivity.className, 16);
  return (
    <>
      {error && <ErrorComp />}
      {loading && <LoadingComp />}
      {randomActivities && (
        <Link to={`/classdetails/${randomActivity.id}`}>
          <article
            className="w-[335px] h-[404px]  relative rounded-[16px]"
            style={{
              backgroundImage: `url(${randomActivity.asset.url})`,
              backgroundSize: "cover",
            }}
          >
            <p className="rounded-bl-[16px] rounded-tr-[48px] absolute bg-primaryColor w-[224px] h-[72px] bottom-0 left-0 font-poppins font-semibold pl-[16px] pt-[13px]">
              {limitedText}
            </p>
            <span>
              <LikeStar />
            </span>
          </article>
        </Link>
      )}
    </>
  );
};

export default RandomActivity;
