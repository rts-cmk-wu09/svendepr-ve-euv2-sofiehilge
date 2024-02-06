import TrainerList from "../templates/TrainerList";
import SearchListFetch from "../templates/SearchListFecth";
import Navigation from "../templates/Navigation";

const Search = () => {
    
  return (
    <>
      <Navigation text={"Search"}/>
    <SearchListFetch/>
      <h4>Popular classes</h4>
      <TrainerList/>
    </>
  );
};

export default Search;
