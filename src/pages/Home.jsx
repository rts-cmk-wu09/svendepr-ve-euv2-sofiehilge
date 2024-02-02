import { Link } from "react-router-dom";
import ActivityList from "../templates/ActivityList";
const Home = () => {
    return ( <>
    <h3>Popular classes</h3>
    {/* Her indsættes et tilfældigt billede. Load listen af billeder. med en funktion som vælger et nyt id for hver pagereload. */}
    <p>BIG IMAGE random fethed</p>
    <ActivityList/>
    <Link to="/classdetails"><p>Image</p>
    </Link>
    
    </>);
}
 
export default Home;