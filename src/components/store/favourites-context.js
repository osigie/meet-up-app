import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourites: (favmeetup) => {},
  removeFavourites: (id) => {},
  isFavourite: (id) => {},
});

export const FavouriteContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (favmeetup) => {
    return setFavourites((prevFav) => prevFav.concat(favmeetup));
  };

  const removeFavourites = (id) => {
    return setFavourites((preFav) => preFav.filter((each) => each.id !== id));
  };
  const isFavourite = (id) => {
    return favourites.some((each) => each.id === id);
  };

  const context = {
    favourites,
    totalFavourites: favourites.length,
    addFavourites,
    removeFavourites,
    isFavourite,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
