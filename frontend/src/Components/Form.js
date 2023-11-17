
import add from './icons/add.png';
import view from './icons/contacts.png';
import contact from './icons/contact.png';
import profile from './icons/prof.png';
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Nav from '../Pages/Nav'
import './css/Form.css'


function Form() {
  let { id } = useParams();
  const [arr, setarr] = useState([]);
  const [project_name, setproject_name] = useState("");
  const navigate = useNavigate();
  const change_page=()=>{
    navigate("/Project-List/"+id);

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const new_arr = [project_name];
    setarr(new_arr);
    console.log(arr);
    let data = {
      id: id,
      project_name: project_name,
    };
    Axios.post("http://localhost:4000/task/create-project/" + id, data)
      .then((res) => {
        if (res.status === 244) {
          alert("Project name is already registered");
        } else if (res.status === 200) {
          console.log(arr);//Debugging Line remove it in production
          alert("Project created successfully");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
    <Nav/>
    <div class="main-container">
      <div id="background-image">

      <div class="title">
        Welcome User,
      </div>
      <div class="icon-container">
        <Link to="/Project-List/:id" className="navbar-brand" >
          <img  src={add} class="icon" alt="Logo"  width="150px" />
          <label id="1">Add Project</label>
        </Link>
        <Link to="/" className="navbar-brand" >
          <img  src={view} class="icon" alt="Logo"  width="150px" />
          <label id="2">View Projects</label>
        </Link>
        <Link to="/" className="navbar-brand" >
          <img  src={profile} class="icon" alt="Logo"  width="150px" />
          <label id="3">Profile</label>
        </Link>
        <Link to="/" className="navbar-brand" >
          <img  src={contact} class="icon" alt="Logo"  width="150px" />
          <label id="4">Support</label>   
        </Link>
    </div>
  
    </div>
    </div>

    {/* {
      <form onSubmit={handleSubmit}>
    
      <div>
                    <div class="center-container">
              <div class="input-section">
                <label class="pname" for="projectName" style={{ fontFamily: "Agbalumo", color: "Black" }}>Project Name </label><br/>
                <input type="text"  id="project_name" onChange={(event) => setproject_name(event.target.value)} placeholder="Enter project name"/>
                  <br/>
                  <br/>
                  <button class="b1" type="submit" style={{ fontFamily: "Agbalumo", color: "white" }}>Submit</button>
                  <button  class="b2" type="button" onClick={change_page} style={{ fontFamily: "Agbalumo", color: "white" }}>View Projects</button>
              </div>
            </div>
            </div>
      </form>
      
  } */}
    </>
  );
}
export { Form };