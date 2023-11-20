import Axios from "axios";
import { useEffect, useState } from "react";
import "./css/List.css";
import { PopupAssignTask } from "./PopupAssignTask";

function Members(props) {
  const id = props.id;
  const name = props.name;
  const [data, setdata] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  function get_data() {
    Axios.get(`http://localhost:4000/project/get-memeber/${id}/${name}`)
      .then((res) => {
        if (res.status === 200) {
          setdata(res.data);
          console.log(res.data);
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    get_data();
  }, []);

  function delete_member(value) {
    Axios.get(`http://localhost:4000/project/delete-member/${id}/${name}/${value}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Member Deleted Successfully");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  }

  const list = (arr) => {
    return arr.map((value) => {
      return (
        <div className="d-flex flex-column" key={value}>
          <li className="list-group-item px-3 border-0 rounded-5 list-group-item-light mb-1">
            {value}
            <div className="d-flex gap-4 justify-content-center">
              <button
                onClick={() => setPopupVisible(true)}
                className="btn btn-info text-black"
              >
                Assign Task
              </button>
              <button
                onClick={() => delete_member(value)}
                className="btn btn btn-danger text-black"
              >
                Delete Member
              </button>
            </div>
          </li>
        </div>
      );
    });
  };

  return (
    <>
      {isPopupVisible && (
        <PopupAssignTask id={id} name={name} onClose={() => setPopupVisible(false)} />
      )}
      {list(data)}
    </>
  );
}

export { Members };
