import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Axios from 'axios';

function AddTask(props){
    const [gmail,setgmail]=useState("");
    const [task,settask]=useState("");
    const get_data=()=>{
        console.log(gmail);
        console.log(task);
        console.log(props.id);
        console.log(props.name);
        const data={id:props.id,name:props.name,email:gmail,task:task};
        Axios.post('http://localhost:4000/project/add-task',data)
        .then((res)=>{
            if(res.status===245){
                alert("Task Added Successfully");
            }
            else{
                return Promise.reject();
            }
        })
        .catch((err)=>{
            console.log(err);
        })



    }
    return(
       <>
       <input type="text" className="form-control" placeholder="Enter Gmail of the person" onChange={(event)=>setgmail(event.target.value)}/>
       <input type="text" className="form-control" placeholder="Enter Task Name" onChange={(event)=>{settask(event.target.value)}} />
        <button className="btn btn-primary" onClick={get_data}>Add Task</button>
       </>
    )
}
export default AddTask;