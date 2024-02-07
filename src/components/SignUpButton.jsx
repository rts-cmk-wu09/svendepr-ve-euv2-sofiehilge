import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";

const SignUpButton = () => {
  const { userId, token } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //check if userId is available befor making the API request
        if (!userId) {
          setLoading(false);
          console.log("User is not logged in.");
          return;
        }

        //Extrast activityId from the URL
        const activityId = getActivityIdFromUrl();

        //make a GET request with the aqquired token
        const response = await axios.get(
          `http://localhost:4000/api/v1/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Check if classes are returned for the user
        const isUserEnrolled =
          response.data.classes &&
          response.data.classes.some((cls) => cls.classId === activityId);

        setIsEnrolled(isUserEnrolled);
        console.log("Is user enrolled:", isUserEnrolled); // Add this console.log

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, [token, userId]); //runs the effect when the token changes

  //function to extract activityId from the URL
  const getActivityIdFromUrl = () => {
    const urlParts = window.location.pathname.split("/");
    return urlParts[urlParts.length - 1];
  };

  //Define handleSignUpClick function
  const handleSignUpClick = () => {
    //if user is not logged in, redirect to login page
    if (!userId) {
      navigate("/login");
      return (
        <Link to="/login">
          <button className="bg-primaryColor h-[50px] rounded-full opacity-100 uppercase font-semibold text-center px-[28px] py-[15px w-[334px]">
            Log in to sign up
          </button>
        </Link>
      );
    }

    //Extract activityId from the URL
    const activityId = getActivityIdFromUrl();

    //toggle enrollment status
    setIsEnrolled((prevEnrolled) => !prevEnrolled);

    const url = `http://localhost:4000/api/v1/users/${userId}/classes/${activityId}`;
    const method = isEnrolled ? "DELETE" : "POST";

    const config = {
      method: method,
      url: url,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setIsEnrolled((prevEnrolled) => !prevEnrolled);
          console.log(
            `User successfully ${
              isEnrolled ? "remove from" : "added to"
            } the activity`
          );
        } else {
          throw new Error(
            isEnrolled
              ? "Error removing user form the activity"
              : "Error adding user to the activity"
          );
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      {!userId ? (
        <Link to="/login">
          <button className="bg-primaryColor h-[50px] rounded-full opacity-100 uppercase font-semibold text-center px-[28px] w-[334px]">
            Log in to sign up
          </button>
        </Link>
      ) : (
        <button
          className="bg-primaryColor h-[50px] rounded-full opacity-100 uppercase font-semibold text-center px-[28px] py-[15px w-[334px]"
          onClick={!userId ? null : handleSignUpClick}
        >
          {isEnrolled ? "Cancel enrollment" : "Sign up"}
        </button>
      )}
    </>
  );
};

export default SignUpButton;
