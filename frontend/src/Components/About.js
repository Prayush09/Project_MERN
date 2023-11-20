import Nav from "../Pages/Nav";
import '../Components/css/About.css'
import img from './icons/bck2.png'
import gif from './icons/giphy1.gif'
function About(){
    return(
        <div>
            <Nav></Nav>
            <div style={{ padding: '30px', display:'flex'}}>
                <div style={{ padding: '30px'}}>
                    <hr class="line" />
                    <label>ABOUT TASKHUB</label><br /><br />
                    <label class="title">How We Help You</label>
                    <p class="info"> Our primary goal is to ensure users feel
                        supported and empowered within the platform. This starts with a
                        user interface that's intuitive and easy to navigate, providing clear access to
                        essential tools and features. A smooth onboarding process becomes crucial,
                        offering tutorials or guided tours that help users familiarize themselves with
                        the platform's functionalities,
                        ensuring they can optimize its capabilities from the outset.</p>
                </div>
                
                <div className="about-us">
                        <div className="image-tag" style={{ padding: '30px',width:'50rem',height:'30rem', backgroundColor:'#9AC9FF'}}>
                            <img src={img} style={{ width:'45rem', height:'25rem' }}></img>
                            <div className="tag"><img src={gif} id='gif'></img></div>
                        </div>
                </div>
            </div>
            <div class="section2">
                <h1 class="title1">OUR VALUES</h1><br/>
                <div class="descriptions">
                    <p>User-Friendly Interface offering clear access to tools and features essential for effective project management.</p>
                    <p>Ensure robust security measures to safeguard users' data and privacy, fostering trust in the platform.</p>
                    <p>Provide a seamless onboarding process with tutorials, tooltips, or a guided tour to help users understand the platform's functionalities and how to use them effectively.</p>
                </div>
            </div>
        </div>
    )
}
export {About};