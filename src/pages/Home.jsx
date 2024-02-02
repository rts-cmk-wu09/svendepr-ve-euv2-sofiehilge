import { Link } from "react-router-dom";
import ActivityList from "../templates/ActivityList";
import ActivityListFetch from "../templates/ActivityListFetch";
import RandomActivity from "../templates/randomActivity";
const Home = () => {
    return ( <>
    <h3>Popular classes</h3>
    <RandomActivity/>
    <ActivityListFetch/>
    <Link to="/classdetails"><p>Image</p>
    </Link>
    
    </>);
}
 
export default Home;