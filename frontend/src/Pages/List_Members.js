import React from 'react';
import { Members } from '../Components/Members';
import { useParams } from 'react-router-dom';
import Nav from "./Nav";
function List_Members(){
    const {id}=useParams();
    const {name}=useParams();
    return(
        <><Nav/>
        <Members id={id} name={name}/>
        </>
    )
}
export {List_Members};