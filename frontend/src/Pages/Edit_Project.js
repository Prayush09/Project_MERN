// Edit_Project.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddMember from "../Components/AddMember";

import { PopupAddMember } from "../Components/PopupAddMember";
import Nav from "./Nav";
function Edit_Project() {
  const { id } = useParams();
  const { name } = useParams();
  const [flag, setFlag] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const addMember = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const allocate = () => {
    navigate('/Allocate-Task/' + id + "/" + name);
  };

  const goBack = () => {
    navigate('/Project-List/' + id);
  };

  return (
    <><Nav/>
      <h1 className="text-center">{name}</h1>
      <div className="buttonsEdit" style={{ display: "flex", justifyContent: "center" }}>
  <button className="btn btn-info" onClick={addMember}>
    Add Members
  </button>
  {isPopupVisible && (
    <PopupAddMember onClose={closePopup} />
  )}
  <button className="btn btn-info">Task Status</button>
  <button className="btn btn-info" onClick={allocate}>
    View Members
  </button>
  <button className="btn btn-info" onClick={goBack}>
    Go Back
  </button>
</div>

    </>
  );
}

export { Edit_Project };
