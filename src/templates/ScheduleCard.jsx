import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";

const ScheduleCard = () => {
  const { token, userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //make a GET request with the accuired token
        const response = await axios.get(
          `http://localhost:4000/api/v1/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        //update state with the fetched data
        setClassesList(response.data.classes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };
    //call the function to fetch the data
    fetchData();
  }, [token, userId]); //runs the effect when the token changes

  //loading statement
  if (loading) {
    return <LoadingComp />;
  }

  if (error) {
    return <ErrorComp message={error} />;
  }

  return (
    <>
      {classesList.length > 0 ? (
        classesList.map((item) => (
          <Link key={item.id} to={`/classdetails/${item.id}`}>
            <article className={"w-[335px h-[100px] mx-[20px] mt-[23px] bg-[#FCFBFB border border-solid border-[#D4D4D4] rounded-[12px] opacity-100 flex flex-col justify-center"}>
              <h4 className="px-[25px] pb-[20px] text-left leading-16 tracking-normal text-[#070707] opacity-100 font-poppins font-semibold">{item.className}</h4>
              <p className="px-[25px] text-left font-poppins font-medium leading-[17px] tracking-normal text-[#000]">
                {item.classDay} - {item.classTime}
              </p>
            </article>
          </Link>
        ))
      ) : (
        //display message if no classes are available
        <p className="text-[18px] font-[600] leading-4 pb-[15px] mt-[15px]">
          No classes available. Please sign up for classes
        </p>
      )}
    </>
  );
};

export default ScheduleCard;
