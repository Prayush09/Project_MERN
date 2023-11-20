

// PopupAddMember.js
import React from "react";
import AddMember from "../Components/AddMember";
import '../Components/css/Form.css'; // Import your CSS file

const PopupAddMember = ({ onClose }) => {
    return (
      <div className="popup-container">
        <div className="popup-overlay" onClick={onClose}></div>
        <div className="popup">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div className="popup-content">
            <AddMember />
          </div>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export { PopupAddMember };