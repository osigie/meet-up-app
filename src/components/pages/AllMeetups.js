import { useState, useEffect } from "react";
import MeetupList from "../meetups/MeetupList";



const AllMeetups = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://meet-up-app-55e7e-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const arrData = [];
        for (const [key, value] of Object.entries(data)) {
          const newlyFormed = {
            id: key,
            ...value,
          };
          arrData.push(newlyFormed);
        }
        setData(arrData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p> Loading....</p>
      </section>
    );
  }
  return (
    <div>
      <MeetupList meetup={data} />
    </div>
  );
};

export default AllMeetups;
