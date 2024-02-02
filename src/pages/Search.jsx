import TrainerList from "../templates/TrainerList";
import SearchListFetch from "../templates/SearchListFecth";

const Search = () => {
    
  return (
    <>
      <h1>Search</h1>
    <SearchListFetch/>
      <h4>Popular classes</h4>
      <TrainerList/>
      
    </>
  );
};

export default Search;
