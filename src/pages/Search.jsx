import TrainerList from "../templates/TrainerList";
import SearchListFetch from "../templates/SearchListFecth";
import Navigation from "../templates/Navigation";
import { useState } from "react";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import ErrorComp from "../components/ErrorComp";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // // Fetch class list data using custom hook
  // const {
  //   getData: allClassList,
  //   loading,
  //   error,
  // } = useGetData("http://localhost:4000/api/v1/classes");

  // if (loading) {
  //   return <LoadingComp />;
  // }

  // if (error) {
  //   return <ErrorComp />;
  // }
  return (
    <>
      <Navigation text={"Search"} />
      <div className="ml-[20px]">
        <form>
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="inputBorder"
            />
          </div>
        </form>
      </div>
      <SearchListFetch searchQuery={searchQuery} />
      <TrainerList searchQuery={searchQuery} />
    </>
  );
};

export default Search;
