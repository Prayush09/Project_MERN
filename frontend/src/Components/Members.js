import Axios from 'axios'
import {useEffect, useState} from 'react'
import './css/List.css'
import AddTask from './AddTask';
function Members(props){
    const id=props.id;
    const name=props.name;
    const[data,setdata]=useState([]);
    const[flag,setflag]=useState(false);
       function get_data(){
        Axios.get(`http://localhost:4000/project/get-memeber/${id}/${name}`)
        .then((res)=>{
            if(res.status===200){
                setdata(res.data);
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
        get_data();
       },[]);

       const assign_task=()=>{
        setflag(!flag);
        
       }
       function delete_member(value){
        console.log(id);
        console.log(name);
        console.log(value);
        Axios.get(`http://localhost:4000/project/delete-member/${id}/${name}/${value}`)
        .then((res)=>{
          if(res.status===200){
            alert("Member Deleted Successfully");
            
        }
        else{
            return Promise.reject();
        }
      })
      .catch((err)=>{
          console.log(err);
      })
      window.location.reload();

       }
    
        const list=(arr)=>{
           return arr.map((value)=>{
                console.log(value);
                return (
                    <>
                    
                      <div className="d-flex flex-column">
                        <li className="list-group-item px-3 border-0 rounded-5 list-group-item-light mb-1">
                          {value}
                          <div className="d-flex gap-4 justify-content-center">
                          <button onClick={assign_task}
                            className="btn btn-info text-black"
                          >
                            Assign Task
                          </button>
                          <button
                            onClick={()=>delete_member(value)}
                            className="btn btn btn-danger text-black"
                          >
                            Delete Member
                          </button>
                          </div>
                        </li>
                        </div>
                        
                    </>
                  );
            })

        }

     
    return(
        <>
        {flag && <AddTask id={id} name={name} />}

        {list(data)}
        </>
    )
}
export {Members};