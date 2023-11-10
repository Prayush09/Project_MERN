import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


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
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Project Name</label>
          <input
            type="text"
            className="form-control"
            id="project_name"
            onChange={(event) => setproject_name(event.target.value)}
          />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </div>
      </form>
      <button type="button" class="btn btn-dark" onClick={change_page}>View Projects</button>
    </>
  );
}
export { Form };
