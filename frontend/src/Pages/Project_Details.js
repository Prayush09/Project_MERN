import { useParams } from "react-router-dom";
function Project_Details(){
    const {name}=useParams();
    console.log(name);
    return(
        <>
        <h1 className="text-center">{name}</h1>
        <button className="btn btn-info">Add Members</button>
        <button className="btn btn-info">Delete Members</button>
        <button className="btn btn-info">Task Status</button>
        <button className="btn btn-info">Assign Task</button>
        </>
    )
}
export {Project_Details};