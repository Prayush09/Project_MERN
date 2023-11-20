import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import './css/List.css';



const List = (props) => {
  const navigate=useNavigate();
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
      Axios.get(`http://localhost:4000/project/delete-project/` + id + "/" + value)
      .then((res)=>{
        if(res.status===245){
          // alert("Project Deleted Successfully");
        }else{
          return Promise.reject();
        }
      }).catch((err)=>{console.log(err)})
    window.location.reload();
  };
  const edit = (value) => {
    navigate(`/project/${id}/${value}`);
    console.log(value);
  };
  function list(arr) {
    return arr.map((item) => {
      // This is used to display all the projects of a user
      // Don't change function names
      return (
        <>
        {/* Changes Lakshmi */}
        <div class="body-tab">
                <table class="project-table">

                  <tbody>
                    <tr>
                      <td>{item}</td>
                      <td>
                        <button
                          className="btn-in"
                          onClick={() => {
                            edit(item);
                          }}
                        >
                          Edit Project
                        </button>
                        <button
                          className="btn-dan"
                          onClick={() => {
                            deletion(item);
                          }}
                        >
                          Delete Project
                        </button></td>
                    </tr>
                  
                  </tbody>
                </table>

        </div>
        </>
      );
    });
  }

  return <>

  {/* changes Lakshmi */}
  {list(props.arr)}
  </>; //Returning this in the ListProject component
};
export { List };