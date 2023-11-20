import Axios from 'axios';
import { useEffect, useState } from 'react';
function Display_Task(props){
    console.log(props.id);
    const [data,setData]=useState([]);
    function getTask(){
        Axios.get(`http://localhost:4000/api/get-task/${props.id}`).then((res)=>{
            if(res.status === 200){
                setData(res.data);
                console.log(res.data);
            }
            else{
                return Promise.reject();
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getTask();
    
    },[])
    function list(){
        return data.map((item)=>{
            return(
                // {Make a card here}
                <div>
                <h1>{item.project_name}</h1>
                <h1>{item.task_name}</h1>
                <h2>{item.task_status}</h2>
                <h3>{item._id}</h3>
                </div>
            )
        })
    }
    return(
        <>
        {list()}
        </>
    )
}
export {Display_Task};