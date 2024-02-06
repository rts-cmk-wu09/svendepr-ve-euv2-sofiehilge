import { useState, useEffect } from "react";
import ActivityListFetch from "./ActivityListFetch";
import NoResults from "../components/NoResults";
import useGetData from "../hooks/useGetData";

const SearchListFetch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {getData: allClassList, loading, error} = useGetData("http://localhost:4000/api/v1/classes");
  const [filteredClasses, setFilteredClasses] = useState([]);

  useEffect(() => {
    //Filter activities based on the search query
    if (searchQuery.trim() === "") {
      //if the search query is empty, dont filter classes
      setFilteredClasses([]);
      return;
    }

    const filtered = allClassList.filter(
      (item) =>
        (item.className &&
          item.className.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.classDescription &&
          item.classDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (item.classDay &&
          item.classDay.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.trainer &&
          item.trainer.trainerName &&
          item.trainer.trainerName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()))
    );
    console.log("filtered classes:", filtered);
    setFilteredClasses(filtered);
  }, [searchQuery, allClassList]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="ml-[20px]">
      <form>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="inputBorder"
          />
        </div>
      </form>
      <h4 className="font-poppins font-bold mt-[32px] mb-[16px]">Popular classes</h4>
      {searchQuery.trim() === "" ? (
        <ActivityListFetch activities={allClassList} />
      ) : filteredClasses.length === 0 ? (
        //if searchQuery is not empty it check if filteredClasses has items, if filteredClasses it empty it renderes NoResults. If searchQuery is empty ActivityListFetch is rendered
        <NoResults />
      ) : (
        <ActivityListFetch activities={filteredClasses} />
      )}
    </div>
  );
};

export default SearchListFetch;
