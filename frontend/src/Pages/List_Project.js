import Axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {List} from '../Components/List';
import './Css/List_Project.css'

function List_Project(){
    let {id}=useParams();
    console.log(id);
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
        <h1 className='text-center'>Project List</h1>
        <ul className='d-flex flex-column gap-4'>
        <List arr={project_name} id={id}/>
        </ul>
        </>
    )

}
export {List_Project};