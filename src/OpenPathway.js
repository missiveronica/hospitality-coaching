import { useNavigate } from "react-router";
import { useEffect } from "react";
import './OpenPathway.css';
import iconThree from './Assets/pageImages/open.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function OpenPathway () {

    useGSAP(() => {
        gsap.to (".bookBtn", {y: 10, ease:"bounce", repeat: -1, duration: 3});
        gsap.to (".back", {x:-5, ease:"bounce", repeat: -1, duration: 3})
    });

    useEffect(() => {
        AOS.init();
      }, [])

    const navigate = useNavigate();
    const navigateToBooking = () => {
        navigate("/");
        setTimeout(() => {
         const bookingSection = document.getElementById("bookNow");
         if (bookingSection) {
           bookingSection.scrollIntoView({ behavior: "smooth" });
         }
       }, 100);
       };
       
       
 
    return(
        <div>

            <div className="forthPageBox">
            <h2 className="pageTitle">Open Pathway</h2>
            <button className="back" onClick={() => navigate(-1)}>Go back</button>
        </div>
      <div className="cluster">
        <div data-aos="flip-left" data-aos-duration="2000" className="pageCardOne">
            <div className="bulb"><img src ={iconThree} alt ="icon"></img></div>
            <h3>Structure</h3>
            <ul>
                <li>Launch of the journey online session</li>
                <li>Crafting of a personalized career Strategy according to your Needs</li>
            </ul>
        </div>
        
        </div>

        <div data-aos="zoom-in" className="pageText">
          
            <h4>Do you feel confused amidst your Career Path?</h4>
            <button className="bookBtn" onClick={navigateToBooking}>Book Now</button>
            <p>🫶 We are at your disposal! Our guidance will elevate you to the best self!</p>
                <p>✔️ This service is dedicated for those who are experienced, however not fully satisfied where they are in their career and want to give it the right direction. </p>
                 <p>✔️ Equip yourself with the necessary knowledge and tools to establish an engaged, productive, and healthy workplace. </p>
                 <p>✔️ More than coaching, our virtual development paths address the important challenges faced by many candidates. </p>
                <p>✔️ Our paths combine microlearnings and development activities based on the candodate’s experience and educational background.</p>
        </div>

        </div>
            

                
            
      

    )
}
export default OpenPathway;
