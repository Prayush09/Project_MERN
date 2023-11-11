import { Link } from 'react-router-dom';
import logo from './Task Hub-logos_transparent.png';
import './Nav.css'; // Import a custom CSS file
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const home=()=>{
    navigate("/sign-up");

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
        <a className="navbar-brand">
          <img src={logo} alt="" width="50" height="50"  onClick={home}/>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">Sign-Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-link">Sign-In</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About-us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
