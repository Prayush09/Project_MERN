import Axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Dropdown } from "react-bootstrap";

function Task(props) {
  const [data, set_data] = useState([]);
  function get_data() {
    Axios.get(
      `http://localhost:4000/project/task-status/${props.id}/${props.name}`
    ).then((res) => {
      set_data(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    get_data();
  }, []);
  function list() {
    return data.map((task) => {
      return (
            <>
            <Card className="mx-auto" style={{ width: '50rem', backgroundColor: '#bad2ff' }}>
    <Card.Body>
        <Card.Title>{task.task_name}</Card.Title>
        <Card.Text>{task.user_email}</Card.Text>
        <Card.Text>{task.task_status}</Card.Text>

    </Card.Body>
</Card>
            </> 
      );
    });
  }

  return <>{list()}</>;
}
export { Task };
