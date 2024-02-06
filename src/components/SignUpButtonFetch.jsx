import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadingComp from "./LoadingComp";
import ErrorComp from "./ErrorComp";

const SignUpButtonFetch = () => {
  const { userId, token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activityId, setActivityId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User is logged in:", !!userId);
    if (!userId) {
      setLoading(false);
      return;
    }

    // Function to extract activityId from the URL
    const getActivityIdFromUrl = () => {
      const urlParts = window.location.pathname.split("/");
      const activityId = urlParts[urlParts.length - 1];
      const activityIdNumber = parseInt(activityId, 10); //parse the activityId as an integer
      console.log("Activity ID from URL:", activityIdNumber);
      return activityIdNumber;
    };

    //extract activityId from the URL
    const idFromUrl = getActivityIdFromUrl();

    //redirect to error page if activityId is not available
    if (!idFromUrl) {
      navigate("/error");
    }

    //set the activityId state
    setActivityId(idFromUrl);

    //fetch class data based on activityId
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/classes/${idFromUrl}`
        );
        if (response.ok) {
          const classData = await response.json();
          // Check if the class has users enrolled
          setIsEnrolled(classData.users.some((user) => user.id === userId));
        } else {
          setIsEnrolled(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, navigate]);

  function handleEnrollmentToggle() {
    if (!userId) {
      navigate("/login");
      return;
    }

    setLoading(true);
    setError(null);

    const requestOptions = {
      method: isEnrolled ? "DELETE" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const apiUrl = `http://localhost:4000/api/v1/users/${userId}/classes/${activityId}`;

    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (response.ok) {
          setIsEnrolled(!isEnrolled);
          console.log("Enrollment status updated successfully");
        } else {
          throw new Error("Failed to update enrollment status");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  /* Loading statement */
  if (loading) {
    return <LoadingComp />;
  }

  if (error) {
    return <ErrorComp />;
  }

  return (
    <button
      onClick={handleEnrollmentToggle}
      className="bg-primaryColor h-[50px] rounded-full opacity-100 uppercase font-semibold text-center px-[28px] py-[15px w-[334px]"
    >
      {userId && !isEnrolled ? "Login for sign up" : "Cancel enrollment"}
    </button>
  );
};

export default SignUpButtonFetch;
