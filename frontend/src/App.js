import logo from './logo.svg';
import './App.css';
import {Create_Project} from './Pages/Create_Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import User_Login from './Pages/User_Login';
import User_Sign_Up from './Pages/User_Sign_Up';
import Nav from './Pages/Nav';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<User_Login/>}/>
      <Route path="/sign-up" element={<User_Sign_Up/>}/>
      <Route path="/sign-in" element={<User_Login/>}/>
      <Route path="/User-Dashboard" element={<Create_Project/>}/>
    </Routes>

    </HashRouter>
     
    
    </>
  );
}

export default App;
