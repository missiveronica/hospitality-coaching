import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Team () {

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div>
            <section id ="team">
                <div className="teamContainer">
                    <h2>OUR TEAM</h2>
                </div>
                <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="teamDescription">
                    <p className="teamText">Our people are at heart of the consulting. Enthusiasme, dynamic mindset, creativity and unique approach to every client make the difference. We are thrilled to share our valuable knowledge of industry and impactful techniques how to win the perfect employer. </p>

                </div>






            </section>


        </div>
    )
}
export default Team;