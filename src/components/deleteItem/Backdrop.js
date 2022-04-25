import classes from "./Backdrop.module.css";
const Backdrop = (props) => {
  const remove = () => {
    props.removal();
  };
  return <div className={classes.backdrop} onClick={remove}></div>;
};

export default Backdrop;
