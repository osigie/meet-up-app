import NewMeetupForm from "../meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
const NewMeetups = () => {
  const navigate = useNavigate();
  const addNew = (inputObj) => {
    fetch(
      "https://meet-up-app-55e7e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(inputObj),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => navigate("/", { replace: true }));
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAdd={addNew} />
    </section>
  );
};

export default NewMeetups;
