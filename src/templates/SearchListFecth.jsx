import { useState, useEffect } from "react";
import ActivityListFetch from "./ActivityListFetch";
import NoResults from "../components/NoResults";

const SearchListFetch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allClassList, setAllClassList] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);

  useEffect(() => {
    //Fetch all activities on initial render
    fetch("http://localhost:4000/api/v1/classes")
      .then((response) => response.json())
      .then((data) => setAllClassList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
    <>
      <form className="pl-[20px] mt-[31px]">
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
      {searchQuery.trim() === "" ? (
        <ActivityListFetch activities={allClassList} />
      ) : filteredClasses.length === 0 ? (
        //if searchQuery is not empty it check if filteredClasses has items, if filteredClasses it empty it renderes NoResults. If searchQuery is empty ActivityListFetch is rendered
        <NoResults />
      ) : (
        <ActivityListFetch activities={filteredClasses} />
      )}
    </>
  );
};

export default SearchListFetch;
