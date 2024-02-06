import TrainerList from "../templates/TrainerList";
import SearchListFetch from "../templates/SearchListFecth";
import Navigation from "../templates/Navigation";

const Search = () => {
    
  return (
    <>
      <Navigation text={"Search"}/>
    <SearchListFetch allClassList={allClassList}/>
      <TrainerList allClassList={allClassList}/>
    </>
  );
};

export default Search;
