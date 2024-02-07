import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const BurgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { userId, token, logout } = useAuth();

  useEffect(() => {
    //log whether the usre is logged in or logged out
    if (token && userId){
      console.log("User is logged in");
    } else {
      console.log("User is logged out");
    }
  }, [token, userId]);

  const handleStateChange = (state) => {
    setIsClicked(state.isOpen);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Menu width={"100%"} isOpen={isClicked} onStateChange={handleStateChange}>
      <Link to="/home" onClick={toggleClick}>
        Home
      </Link>
      <Link to="/search" onClick={toggleClick}>
        Search
      </Link>
      <Link to="/schedule" onClick={toggleClick}>
        My Schedule
      </Link>

      {userId ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <Link to="/login" onClick={toggleClick}>
          Log in
        </Link>
      )}
    </Menu>
  );
};

export default BurgerMenu;
