import Axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {List} from '../Components/List';
function List_Project(){
    let {id}=useParams();
    const [project_name,setproject_name]=useState([]);
    const get_project=()=>{
        Axios.get("http://localhost:4000/task/get-project/"+id)
    .then((res)=>{
        if(res.status===200){
            console.log(res.data);
            setproject_name(res.data[0].project_name);
            console.log(project_name);
        }else{
            return Promise.reject();
        }
    })
    .catch((err)=>{
        alert(err);
    })
    }
    useEffect(()=>{
        get_project();//only render once
    },[]);
    
    
    return(
        <>
        <ul>
        <List arr={project_name}/>
        </ul>
        </>
    )

}
export {List_Project};