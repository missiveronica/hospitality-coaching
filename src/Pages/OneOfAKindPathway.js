import { useNavigate } from "react-router";
import { useEffect } from "react";
import './OneOfAKindPathway.css';
import iconOne from '../Assets/pageImages/structure.png';
import iconTwo from '../Assets/pageImages/star.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function OneOfAKindPathway () {

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

            <div className="thirdPageBox">
            <h2 className="pageTitle">One of A Kind Pathway</h2>
            <button className="back" onClick={() => navigate(-1)}>Go back</button>
        </div>
      <div className="cluster">
        <div data-aos="flip-left" data-aos-duration="2000" className="pageCardOne">
            <img src ={iconOne} alt ="icon"></img>
            <h3>Structure</h3>
            <ul>
                <li>Launch of the journey online session</li>
                <li>Crafting of a personalized Job Search Strategy</li>
                <li>2 sessions with a coach</li>
                <li>Tools for success: Resume, LinkedIn, network</li>
                <li>Interview preparation</li>
                <li>Personal presentation</li>
            </ul>
        </div>
        
        <div data-aos="flip-right" data-aos-duration="2000" className="pageCardOne">
            <img src ={iconTwo} alt ="icon"></img>
            <h3>Results</h3>
            <ul>
                <li>Confidence</li>
                <li>Integrated mind</li>
                <li>Clarity of the pathway</li>
                <li>Solid action plan</li>
                <li>Assistance from point A to the desired point B</li>
                <li>Dream job landing</li>
            </ul>
        </div>
        
        </div>

        <div data-aos="zoom-in" className="pageText">
          
            <h4>Are you burnt our with your Job Search?</h4>
            <button className="bookBtn" onClick={navigateToBooking}>Book Now</button>
            <p>🫶 We hear you! And we are there to elevate you to the best self!</p>
                <p>✔️ This service is dedicated for those who experience difficulty in finding the right position and company to meet their personal needs and professional expectations. </p>
                 <p>✔️ Equip yourself with the necessary knowledge and tools to establish an engaged, productive, and healthy workplace. </p>
                 <p>✔️ More than coaching, our virtual development paths address the important challenges faced by many candidates. </p>
                <p>✔️ Our paths combine microlearnings and development activities based on the candodate’s experience and educational background.</p>
        </div>

        </div>
            

                
            
      

    )
}
export default OneOfAKindPathway;
