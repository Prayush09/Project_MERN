import Nav from "../Pages/Nav";
import './css/Home.css'
import img1 from './icons/div1img.jpg';
import img2 from './icons/div2img.jpg';
import { useNavigate } from 'react-router-dom'; 

function Home(){

    const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Use the navigate function to go to the desired page
    navigate('/sign-up');
  };


    return(
        <div className="containerMain">
            <Nav></Nav>
            <div class="section-home1">
            <img  src={img1}/>
                <div className="text">
                    <h1> Navigate success one project at a time - Simplify, Organize, Achieve!</h1>
                </div>
            </div>
            <div class="section-home2">
            <h1>Time management and Syncronized working environment results in better accountability, assessment, and improvment.</h1>
            <img src={img2}></img>
            
            </div>
            <br></br>
            <div className="container-3">
            <div className="section-home3">
                <div className="section-home3-content">
                    <h4 className="section-home3-title">Why delay? Take action now: Opportunities await ➡️</h4>
                </div>

                <div className="section-home3-logo-wrapper">
                    <div style={{ padding: '20px' }}> <button className="but" onClick={handleGetStartedClick}>Get Started</button></div>
                </div>
            </div>
            </div>
            <br></br>
        </div>
        

    )
}
export {Home};