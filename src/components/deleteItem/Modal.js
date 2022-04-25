import classes from "./Modal.module.css";

const Modal = (props) => {
    const remove = ()=>{
props.removal()
    }
  return (
    <div className={classes.modal}>
      <p>Are you sure?</p>
      <button className={classes.btn} onClick={remove}>
        Cancel
      </button>
      <button className={classes.btn} >
        Confirm
      </button>
    </div>
  );
};

export default Modal;
