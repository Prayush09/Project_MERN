import React from "react";
import { Form } from "../Components/Form";

const PopupCreateProject = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <Form onClose={onClose} />
      </div>
    </div>
  );
};

export { PopupCreateProject };
