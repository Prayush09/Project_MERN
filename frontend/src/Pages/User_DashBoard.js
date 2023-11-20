// User_DashBoard.js
import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Nav from '../Pages/Nav';
import { PopupCreateProject } from "../Components/PopupCreateProject";
import add from '../Components/icons/add.png';
import view from '../Components/icons/contacts.png';
import profile from '../Components/icons/prof.png';
import info from '../Components/icons/info.jpg';
import task from '../Components/icons/task.jpg';
import '../Components/css/Form.css';

function User_DashBoard() {
  const { id } = useParams();
  const link = [`/Create-Project/${id}`, `/Project-List/${id}`, `/Profile/${id}`, `/support/${id}`,`/View-Task/${id}`];
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <Nav />
      <div className="main-container">
        <div id="background-image">

          <div className="title">
            Welcome User,
          </div>
          <div className="icon-container">
            <button type="button" className="navbar-brand" onClick={openPopup} style={{border: "none", background: "white"}}>
              <img src={add} className="icon" alt="Logo" width="150px" />
              <label id="1">Add Project</label>
            </button>

            <Link to={link[1]} className="navbar-brand" >
              <img src={view} class="icon" alt="Logo" width="150px" />
              <label id="2">View Projects</label>
            </Link>
            <Link to={link[2]} className="navbar-brand" >
              <img src={profile} class="icon" alt="Logo" width="150px" />
              <label id="3">Profile</label>
            </Link>
            <Link to={link[3]} className="navbar-brand" >
              <img src={info} class="icon" alt="Logo" width="150px" />
              <label id="4">Info</label> 
            </Link>
          </div>
          <br>
          </br>
          <div class="icon-container1">
            <Link to={link[4]} className="navbar-brand" >
            <img src={task} class="icon" alt="Logo" width="150px" />
            <label id="5">View Tasks</label> 
            </Link>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <PopupCreateProject onClose={closePopup} />
      )}

    </>
  );
}

export { User_DashBoard };
