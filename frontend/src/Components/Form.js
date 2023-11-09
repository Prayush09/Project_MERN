import { useEffect, useState } from "react";
import Axios from "axios";

function Form() {
    const [arr,setarr]=useState([]);
    const [project_name,setproject_name]=useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const new_arr=[project_name];
     setarr(new_arr)
     console.log(arr);
     let data={
       project_name:project_name
     }
     Axios.post("http://localhost:4000/api/create",data)
     .then((res)=>{
      if(res.status===200){
        console.log(arr);
        alert("Project created successfully")
      }else{
        return Promise.reject();
      }
     })
     .catch((err)=>{
      alert(err);
     })

    
    }
  return (
    <>
     <form onSubmit={handleSubmit}>
     <div class="form-group">
        <label>Project Name</label>
        <input type="text" className="form-control" id="project_name" onChange={(event)=>setproject_name(event.target.value)} />
        <button type="submit" className="btn btn-info">Submit</button>
      </div>
     
     </form>
    </>
  );
}
export  {Form};