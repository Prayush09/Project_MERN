import logo from './logo.svg';
import './App.css';
import {Create_Project} from './Pages/Create_Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import User_Login from './Pages/User_Login';
import User_Sign_Up from './Pages/User_Sign_Up';
import Nav from './Pages/Nav';
import { HashRouter, Routes, Route } from "react-router-dom";
import { List_Project } from './Pages/List_Project';
import { Project_Details } from './Pages/Project_Details';

function App() {
  return (
   
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<User_Login/>}/>
      <Route path="/sign-up" element={<User_Sign_Up/>}/>
      <Route path="/sign-in" element={<User_Login/>}/>
      <Route path="/User-Dashboard/:id" element={<Create_Project/>}/>
      <Route path="/Project-List/:id" element={<List_Project/>}/>
      <Route path='/project/:name' element={<Project_Details/>}/>
    </Routes>

    </HashRouter>
     
    
    </>
  );
}

export default App;
