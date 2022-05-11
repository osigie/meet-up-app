import { useContext } from "react";
import { FavouriteContext } from "../store/favourites-context";
import MeetupList from "../meetups/MeetupList";
const Favourites = () => {
  const favContx = useContext(FavouriteContext);
  let content;
  favContx.favourites.length === 0
    ? (content = <p> You have no favourite yet</p>)
    : (content = <MeetupList meetup={favContx.favourites} />);
  return (
    <section>
      <h1> My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
