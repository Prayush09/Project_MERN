import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import './css/List.css'

const List = (props) => {
  let { id } = useParams();
  const [flag, set_flag] = useState(false);
  const deletion = (value) => {
    set_flag(true);
    const data = { id: id, project_name: value }; //Creating a object to pass the data
    Axios.post(`http://localhost:4000/task/delete-project/` + id, data) //Fetch request using Axios
      .then((res) => {
        if (res.status === 245) {
          alert("Project Deleted Successfully");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        alert("An error has occurred");
        console.log(err);
      });
    window.location.reload();
  };
  const edit = (value) => {
    console.log(value);
  };
  function list(arr) {
    return arr.map((item) => {
      // This is used to display all the projects of a user
      // Don't change function names
      return (
        <>
          <div className="d-flex flex-column">
            <li className="list-group-item px-3 border-0 rounded-5 list-group-item-light mb-1">
              {item}
              <div className="d-flex gap-4 justify-content-center">
              <button
                className="btn btn-info text-black"
                onClick={() => {
                  edit(item);
                }}
              >
                Edit Project
              </button>
              <button
                className="btn btn btn-danger text-black"
                onClick={() => {
                  deletion(item);
                }}
              >
                Delete Project
              </button>
              </div>
          
            </li>
            </div>
        </>
      );
    });
  }

  return <>{list(props.arr)}</>; //Returning this in the ListProject component
};
export { List };
