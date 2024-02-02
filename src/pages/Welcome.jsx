import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/home">
        <p>START TRAINING</p>
      </Link>
    </>
  );
};

export default Welcome;
