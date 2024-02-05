import { Link } from "react-router-dom";

import ActivityListFetch from "../templates/ActivityListFetch";
import RandomActivity from "../templates/randomActivity";

const Home = () => {
    return ( <div className="w-[375px] flex flex-col">
<div className="pl-[21px] pt-[48px] flex flex-row">
        <h3 className="text-left font-normal leading-normal tracking-normal">Popular classes</h3>
      </div>
    <RandomActivity/>
    <ActivityListFetch/>
    <Link to="/classdetails"><p>Image</p>
    </Link>
    
    </div>);
}
 
export default Home;