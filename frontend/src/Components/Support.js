import Nav from "../Pages/Nav";
import '../Components/css/Support.css';
import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();

  const handleBack = () => {
    // Replace '/temp' with the appropriate path
    navigate('/User-Dashboard/:id');
  };

  return (
    <><Nav/>
    <div id="main-container">
      <div style={{ padding: '30px' }} class="bg-img">
        <hr class="line" />
        <label style={{ width: '200px', fontSize: '40px' }}>INFORMATION</label><br /><br />
        <div class="transparent-box">
          <p>At TaskHub, we're dedicated to revolutionizing the way you manage and execute projects. Our comprehensive platform is designed to streamline your workflow, boost collaboration, and elevate project success rates.</p>
          <hr></hr>
          <h4>For More Information, Email Us At:</h4>
          <h6>
            <ul>
              <li>Arpit_Aditya@21BCE8700</li>
              <li>PrayushGiri@21BCE7864</li>
              <li>Lakshmi_VinodKumar@21BCE7474</li>
              <li>Yash_Saxena@21BCE8704</li>
              <li>Pratham_Swarnkar@21BCE7864</li>
              
            </ul>
          </h6>
          <a></a>
        </div>
        <button onClick={handleBack} className="btn btn-outline-secondary" style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "white" }}>Back</button>
        <div></div>
      </div>
    </div>
    </>
  );
}

export default Support;
