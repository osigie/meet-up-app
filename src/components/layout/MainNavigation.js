import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FavouriteContext } from "../store/favourites-context";
import { useContext } from "react";
const MainNavigation = () => {
  const favContx = useContext(FavouriteContext);
  const total = favContx.favourites.length;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All meetups</Link>
          </li>
          <li>
            <Link to={"/fav"}>Favourites</Link>
            <span className={classes.badge}>{total}</span>
          </li>
          <li>
            <Link to={"/meet-up"}>Add meet-up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
