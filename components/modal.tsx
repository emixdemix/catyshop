import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from '../styles/Home.module.css'

const Modal = (params:any) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { show, onClose, children, title } = params
  
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e:any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={classes.modalStyledModalOverlay}>
      <div className={classes.StyledModal}>
      <div className={classes.StyledModalHeader}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {title && <div className={classes.StyledModalTitle}>{title}</div>}
        <div className={classes.StyledModalBody}>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;