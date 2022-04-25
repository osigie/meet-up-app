import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <p>Are you sure?</p>
      <button className={classes.btn} onClick={props.confirmModal}>
        Cancel
      </button>
      <button className={classes.btn} onClick={props.confirmModal}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
