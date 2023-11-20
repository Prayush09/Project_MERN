import { useParams } from "react-router-dom";
import { Task } from "../Components/Task"
function Task_Status(){
    const {id}=useParams();
    const {name}=useParams();
     return<>
     <Task id={id} name={name}/>
     </>
}
export {Task_Status};