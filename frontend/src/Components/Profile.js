import Nav from "../Pages/Nav";
import { useNavigate } from "react-router-dom";
import '../Components/css/Profile.css';
import per from '../Components/icons/prof.jpg';

function Profile() {
    const navigate = useNavigate();

    const handleBack = () => {
        // Replace '/temp' with the appropriate path
        navigate('/User-Dashboard/:id');
    };

    return (
        <div>
            <div style={{ padding: '30px', display: 'flex' }}>
                <div style={{ padding: '30px' }}>
                    <hr class="line" />
                    <label style={{ fontSize: '30px' }}>Profile</label>
                    <div className="BackButton">
                    <button onClick={handleBack} className="btn btn-outline-secondary" style={{display:"flex", justifyContent:"center", alignItems:"center" }}>Back</button>
                    </div><div className="profile-box">
                        <div className="img-profile"><img src={per} alt="Profile Picture"></img></div>
                        <div className="desc-profile">
                            <h2>Name: John Doe</h2>
                            <h4>Email: johndoe@example.com</h4>
                            <p>Projects Created:</p>
                            <p>Tasks:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Profile };
