import TrainerList from "../templates/TrainerList";
import ActivityList from "../templates/ActivityList";

const Search = () => {
    
  return (
    <>
      <h1>Search</h1>
      <p>Search classes</p>
      <h4>Popular classes</h4>
      <ActivityList/>
      <TrainerList/>
      
    </>
  );
};

export default Search;
