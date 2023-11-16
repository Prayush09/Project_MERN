import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

const List = (props) => {
  const navigate = useNavigate();
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
      Axios.get(`http://localhost:4000/project/delete-project/`+value)
      .then((res)=>{
        if(res.status===245){
          alert("Project Deleted Successfully");
        }else{
          return Promise.reject();
        }
      }).catch((err)=>{
        console.log(err);
      })
    window.location.reload();
  };
  const edit = (value) => {
    const data={id:id,Project_Name:value,Members_Gmail:[]}
    console.log(data);
    // navigate(`/project/${value}`);
    Axios.post(`http://localhost:4000/project/edit-project/` + id,data)
    .then((res)=>{
      if(res.status==200){
         console.log("Project Created Successfully");
      }else{
        return Promise.reject();
      }

    }).catch((err)=>{
      console.log(err);
    })
    navigate(`/project/${value}`)
  
    //Fetch request using Axios
  };
  function list(arr) {
    return arr.map((item) => {
      // This is used to display all the projects of a user
      // Don't change function names
      return (
        <>
          <div className="d-flex flex-column">
            <li className="list-group-item px-3 border-0 rounded-3 list-group-item-dark mb-2">
              {item}
            </li>
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
          </div>
        </>
      );
    });
  }

  return <>{list(props.arr)}</>; //Returning this in the ListProject component
};
export { List };
