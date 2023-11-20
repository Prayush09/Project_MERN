import Axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
function AddMember(){
    const [email,setEmail]=useState("");
    const{id}=useParams();
    const{name}=useParams();
    
    const add_member=()=>{
        console.log(email);

        const data={id:id,name:name,email:email};
        Axios.post('http://localhost:4000/project/add-member',data)
        .then((res)=>{
            if(res.status===245){
                alert("Member Added Successfully");
            }else{
                return Promise.reject();
            }
        }).catch((err)=>{
            alert("An error has occurred");
            console.log(err);
        })
        // window.location.reload();
    }
    return(
        <>
        <form onSubmit={add_member}>
        <input type="text" placeholder="Enter email" onChange={(event)=>setEmail(event.target.value)}></input>
        <button type="submit">Add Member</button>
        </form>
        </>
    )

}
export default AddMember;