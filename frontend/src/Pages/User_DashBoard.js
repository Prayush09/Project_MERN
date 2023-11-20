
import add from '../Components/icons/add.png';
import view from '../Components/icons/contacts.png';
import contact from '../Components/icons/contact.png';
import profile from '../Components/icons/prof.png';
import {Link, useParams} from 'react-router-dom';
import Nav from '../Pages/Nav'
import '../Components/css/Form.css'
function User_DashBoard(){
    const {id}=useParams();
    const link=[`/Create-Project/${id}`,`/Project-List/${id}`,`/Profile/${id}`,`/support/${id}`,`/View-Task/${id}`];
    return(
        <>
    <Nav/>
    <div class="main-container">
      <div id="background-image">

      <div class="title">
        Welcome User,
      </div>
      <div class="icon-container">
        <Link to={link[0]} className="navbar-brand" >
          <img  src={add} class="icon" alt="Logo"  width="150px" />
          <label id="1">Add Project</label>
        </Link>
        <Link to={link[1]} className="navbar-brand" >
          <img  src={view} class="icon" alt="Logo"  width="150px" />
          <label id="2">View Projects</label>
        </Link>
        <Link to={link[2]} className="navbar-brand" >
          <img  src={profile} class="icon" alt="Logo"  width="150px" />
          <label id="3">Profile</label>
        </Link>
        <Link to={link[3]} className="navbar-brand" >
          <img  src={contact} class="icon" alt="Logo"  width="150px" />
          <label id="4">Support</label>   
        </Link>
        <Link to={link[4]} className="navbar-brand" >
          <button>Click Me</button>
        </Link>
    </div>
  
    </div>
    </div>
   
    </>
    );
}
export {User_DashBoard};