import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";



const MeetupList = (props) => {
  return (

      <ul className={classes.list}>
        {props.meetup.map((each, index) => {
          return (
            <MeetupItem
              key={index}
              id={each.id}
              image={each.image}
              title={each.title}
              description={each.description}
              address={each.address}
            />
          );
        })}
      </ul>

  );
};

export default MeetupList;
