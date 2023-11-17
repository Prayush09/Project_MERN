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
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link to="/" className="navbar-brand" onClick={home}>
          <span id="logo"> <img src={logo} alt="Logo" width="45" height="45" />Task Hub</span>
         </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/User-Dashboard/:id" className="nav-link">
              <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-link">
              <span>Sign-in</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">
              <span>Sign-up</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                <span>About Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
