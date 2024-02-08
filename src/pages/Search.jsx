import TrainerList from "../templates/TrainerList";
import SearchListFetch from "../templates/SearchListFecth";
import Navigation from "../templates/Navigation";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
