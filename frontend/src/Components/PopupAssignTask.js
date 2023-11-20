// PopupAssignTask.js
import React from "react";
import AddTask from "./AddTask";
import "./css/List.css"; // Create a new CSS file for popup styles

const PopupAssignTask = ({ id, name, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="popup-title">Assign Task</h2>
        <div className="popup-content">
          <AddTask id={id} name={name} />
        </div>
      </div>
    </div>
  );
};

export { PopupAssignTask };
