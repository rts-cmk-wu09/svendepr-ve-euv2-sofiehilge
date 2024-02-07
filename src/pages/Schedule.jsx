
import { useAuth } from "../context/AuthContext";
import ScheduleCard from "../templates/ScheduleCard";
import ScheduleCardNoLogin from "../templates/ScheduleCardNoLogin";
import Navigation from "../templates/Navigation";

const Schedule = () => {
  const { token, userId} = useAuth();
  return (
    <>
    <Navigation text={"My Schedule"}/>
      {token && userId ? <ScheduleCard userId={userId} /> : <ScheduleCardNoLogin />}
    </>
  );
};

export default Schedule;
