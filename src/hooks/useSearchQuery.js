import {useState} from "react";

const useSearchQuery = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange  = (e) => {
        setSearchQuery(e.target.value);
    };

    return [searchQuery, handleSearchChange];
}

export default useSearchQuery;