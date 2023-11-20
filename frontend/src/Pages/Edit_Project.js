import { useNavigate, useParams } from "react-router-dom";
import AddMember from "../Components/AddMember";
import { useState } from "react";
function Edit_Project(){
    const {id}=useParams();
    const {name}=useParams();
    console.log(name);
    console.log(id);
    const [flag,set_flag]=useState(false);
    const navigate=useNavigate();
    const addMember=()=>{
        set_flag(true);
    }
    const allocate=()=>{
        navigate('/Allocate-Task/'+id+"/"+name);
    }
    function display_Task(){
        navigate('/Task-Status/'+id+"/"+name);
    }
    
    return(
        <>
        <h1 className="text-center">{name}</h1>
        <button className="btn btn-info" onClick={addMember}>Add Members</button>
        {flag && (
            <>
            <AddMember/>
            <button className="btn btn-info" onClick={()=>set_flag(false)}>Close</button>
            </>
        )}
        <button className="btn btn-info" onClick={display_Task}>Task Status</button>
        <button className="btn btn-info" onClick={allocate}>View Members</button>
        <button className="btn btn-info" onClick={()=>navigate('/Project-List/'+id)}>Go Back</button>
        </>
    )
}
export {Edit_Project};