import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useState} from "react";


const BurgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

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
    <Menu
      width={"100%"}
      isOpen={isClicked}
      onStateChange={handleStateChange}
    >
      <Link to="/home" onClick={toggleClick}>
        Home
      </Link>
      <Link to="/search" onClick={toggleClick}>
        Search
      </Link>
      <Link to="/schedule" onClick={toggleClick}>
        My Schedule
      </Link>
      <Link to="/login" onClick={toggleClick}>
        Log in
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
