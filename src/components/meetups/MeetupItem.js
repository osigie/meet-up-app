import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext, useState } from "react";
import { FavouriteContext } from "../store/favourites-context";
import Backdrop from "../deleteItem/Backdrop";
import Modal from "../deleteItem/Modal";
const MeetupItem = (props) => {
  const [isModal, setIsModal] = useState(false);

  const deleteHandler = () => {
    setIsModal(true);
  };
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
            {isFav ? "Remove from Favourite" : "To favourites"}
          </button>
        </div>
        <div className={classes.actions}>
          <button onClick={deleteHandler}> Delete</button>
        </div>
        {isModal && (
          <>
            <Modal />
            <Backdrop />{" "}
          </>
        )}
      </Card>
    </li>
  );
};

export default MeetupItem;
