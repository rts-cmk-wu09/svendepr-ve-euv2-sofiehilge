import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";
import NoResults from "../components/NoResults";
import ActivityListFetch from "./ActivityListFetch";

const SearchList = ({ searchList }) => {
  const { register, handleSubmit } = useForm();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);

  //fetch data using custom hook
  const { getData: searchResults, loading } = useGetData(
    `http://localhost:4000/api/v1/classes?query=${searchQuery}`
  );

  //update filteredActiviites when searchResults change
  useEffect(() => {
    setFilteredActivities(searchList || searchResults || []); //check its not null or undefined
  }, [searchList, searchResults]);

  //handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //handle form submission
  const onSubmit = (data) => {
    setSearchQuery(data.search);
  };

  //loading statment
  if (loading) {
    return <LoadingComp />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery || ""} //ensure searchQuery is not undefined
            onChange={handleSearchChange}
          />
        </div>
      </form>
      {(searchQuery || "").trim() !== "" ? (
        filteredActivities.length === 0 ? (
          <NoResults />
        ) : (
          <ActivityListFetch activities={filteredActivities} />
        )
      ) : (
        <ActivityListFetch activities={searchList || searchResults || []} />
      )}
    </>
  );
};

export default SearchList;

/* It needs to update input state anytime somebody writes in the input fiedl
no numbers! or weird dots. and It needs a filter somethin... */
