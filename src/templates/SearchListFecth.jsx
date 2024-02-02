import { useState, useEffect } from "react";
import ActivityListFetch from "./ActivityListFetch";
import NoResults from "../components/NoResults";

const SearchListFetch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [allClassList, setAllClassList] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      //if the search query is empty, dont filter classes
      setFilteredClasses([]);
      return;
    }
    const getClassList = {
      method: "GET",
      headers: {
        acceps: "application/json",
      },
    };
    fetch(
      `http://localhost:4000/api/v1/classes?query=${searchQuery}`,
      getClassList
    )
      .then((response) => response.json())
      .then((response) => {
        setAllClassList(response);
        //filter classes only if the search query is not empty
        if (searchQuery.trim() !== "") {
          filterClasses(response, searchQuery);
        } else {
          setFilteredClasses(response);
        }
      })
      .catch((err) => console.error(err));
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const filterClasses = (classes, query) => {
    const filtered = classes.filter(
      (item) =>
        (item.className &&
          item.className.toLowerCase().includes(query.toLowerCase())) ||
        (item.classDescription &&
          item.classDescription.toLowerCase().includes(query.toLowerCase())) ||
        (item.classDay &&
          item.classDay.toLowerCase().includes(query.toLowerCase())) ||
        (item.trainer &&
          item.trainer.trainerName &&
          item.trainer.trainerName.toLowerCase().includes(query.toLowerCase()))
    );
    console.log("filtered classes:", filtered);
    setFilteredClasses(filtered);
  };
  return (
    <>
      <form>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </form>
      {searchQuery.trim() !== "" ? (
        filteredClasses.length === 0 ? (
          <NoResults />
        ) : (
          <ActivityListFetch activities={filteredClasses} />
        )
      ) : null}
    </>
  );
};

export default SearchListFetch;
