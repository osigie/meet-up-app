
import classes from "./Backdrop.module.css"
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick = {props.confirmModal}></div>
  )
}

export default Backdrop