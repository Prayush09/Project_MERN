import { Link } from 'react-router-dom';
import logo from './resources/Task Hub-logos_transparent.png';
import './Css/Nav.css'; // Import a custom CSS file
import { useNavigate } from 'react-router-dom';
// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript and dependencies
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Nav() {
  const navigate = useNavigate();
  const home=()=>{
    navigate("/sign-up");

  }


  return (
    <>
      {
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={home}>
          <img src={logo} alt="Logo" width="50" height="50" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/User-Dashboard/:id" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-link">
                Sign-In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">
                Sign-Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./about-us" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
      /* <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar sticky-top">
        <a className="navbar-brand">
          <img src={logo} alt="" width="50" height="50"  onClick={home}/>
        </a>

        <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Menu
          </button>
            <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
            </div>
        </div>
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
      </nav> */}
    </>
  );
}

export default Nav;
