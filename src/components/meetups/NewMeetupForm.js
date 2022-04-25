import classes from "./newMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const inputObj = {
      title,
      image,
      address,
      description,
    };
props.onAdd(inputObj)
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label>
            Meetup Title
            <input type="text" required ref={titleInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label>
            Meetup Image
            <input type="url" required ref={imageInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label>
            Meetup Address
            <input type="text" required ref={addressInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label>
            Meetup Description
            <textarea rows="5" required ref={descriptionInputRef}>
            </textarea>
          </label>
        </div>

        <div className={classes.actions}>
          <button>Add meetup </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
