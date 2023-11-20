import { useParams } from "react-router-dom";
import { Display_Task } from "../Components/Display_Task";
function View_Task(){
    const {id}=useParams();
    return(
        <>
        <Display_Task id={id}/>
        </>
    )
}
export {View_Task};