import TrainerList from "../templates/TrainerList";
import ActivityList from "../templates/ActivityList";
import SearchList from "../templates/SearchList";

const Search = () => {
    
  return (
    <>
      <h1>Search</h1>
      <SearchList/>
      <h4>Popular classes</h4>
      <ActivityList/>
      <TrainerList/>
      
    </>
  );
};

export default Search;
