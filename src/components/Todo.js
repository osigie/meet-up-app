import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";
const Card = (props) => {
  const [modal, setModal] = useState(false);
  const deleteHandler = () => {
    setModal(true);
  };
  const removeAllHandler = () => {
    setModal(false);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modal && (
        <>
          <Modal confirmModal={removeAllHandler} />
          <Backdrop confirmModal={removeAllHandler} />
        </>
      )}
    </div>
  );
};

export default Card;
