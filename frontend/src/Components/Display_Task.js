import Axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Dropdown } from 'react-bootstrap';


function Display_Task(props) {
    console.log(props.id);
    const [data, setData] = useState([]);

    function getTask() {
        Axios.get(`http://localhost:4000/api/get-task/${props.id}`).then((res) => {
            if (res.status === 200) {
                setData(res.data);
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
        getTask();
    }, []);

    function list() {
        return data.map((item) => (
            <>
            <Card className="mx-auto" style={{ width: '50rem', backgroundColor: '#bad2ff' }}>
    <Card.Body>
        <Card.Title>{item.project_name}</Card.Title>
        <Card.Text>{item.task_name}</Card.Text>
        <Card.Text>{item.task_status}</Card.Text>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">Completed</Dropdown.Item>
                <Dropdown.Item href="#">Pending</Dropdown.Item>
                <Dropdown.Item href="#">Not Started</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Card.Body>
</Card>
            </> 
            
        ));
    }

    return (
        <>
<h1 style={{ textAlign: 'center' }}>TASK</h1>



            {list()}
        </>
    );
}

export { Display_Task };
