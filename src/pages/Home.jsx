import { Link } from "react-router-dom";
import ActivityList from "../templates/ActivityList";
const Home = () => {
    return ( <>
    <h3>Popular classes</h3>
    <ActivityList/>
    <Link to="/classdetails"><p>Image</p>
    </Link>
    
    </>);
}
 
export default Home;