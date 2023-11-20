import  Axios  from "axios";
import { useEffect, useState } from "react";


function Task(props){
    const [data,set_data]=useState([]);
    function get_data(){
        Axios.get(`http://localhost:4000/project/task-status/${props.id}/${props.name}`).then((res)=>{
            set_data(res.data);
            console.log(res);
        })
    }
    useEffect(()=>{
        get_data();
    
    },[]);
    function list(){
        return data.map((task)=>{
            return<>
            <h1>{task.task_name}</h1>
            <h1>{task.task_status}</h1>
            </>
        })
    }

    return<>{list()}</>
}
export {Task};