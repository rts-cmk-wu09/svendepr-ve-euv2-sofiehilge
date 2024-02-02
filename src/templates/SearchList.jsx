import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useGetData from "../hooks/useGetData";
import LoadingComp from "../components/LoadingComp";

const SearchList = ({ searchList }) => {
  //fetch data using custom hook
  const { getData: searchResults, loading } = useGetData(
    "http://localhost:4000/api/v1/classes"
  );

  //loading statment
  if (loading) {
    return <LoadingComp />;
  }

  const allSearchResults = searchList || searchResults;

  return (
    <>
      {allSearchResults.map((item) => (
        <Link key={item.id} to={`/classdetails/${item.id}`}>
          <article
            className="w-32 h-32"
            style={{
              backgroundImage: `url(${item.asset.url})`,
              backgroundSize: "cover",
            }}
          >
            <p className="bg-white">{item.className}</p>
          </article>
        </Link>
      ))}
    </>
  );
};

export default SearchList;
