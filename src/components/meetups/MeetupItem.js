import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import { FavouriteContext } from "../store/favourites-context";
const MeetupItem = (props) => {
  const favContx = useContext(FavouriteContext);
  const isFav = favContx.isFavourite(props.id);
  const toggleFavorite = () => {
    isFav
      ? favContx.removeFavourites(props.id)
      : favContx.addFavourites({
          id: props.id,
          title: props.title,
          description: props.description,
          image: props.image,
          address: props.address,
        });
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {" "}
            {isFav ? "Remove from Favourite" : "To favourites"}
          </button>
        </div>
      </Card>
    </li>
  ); 
};

export default MeetupItem;
