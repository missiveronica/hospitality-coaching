import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import imageOne from '../Assets/TeamPictures/employeeOne.jpg';
import imageTwo from '../Assets/TeamPictures/employeeTwo.avif';
import imageThree from '../Assets/TeamPictures/employeeThree.avif';
import linkedIn from '../Assets/TeamPictures/linkedin.png';

function Team () {

    useEffect(() => {
        AOS.init();
      }, []);


    return(
            <section id ="team">
                <div className="teamContainer">
                    <h2 className="subHeader">OUR TEAM</h2>
                </div>
                <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="teamDescription">
                    <p className="teamText">Our people are at heart of the consulting. Enthusiasme, dynamic mindset, creativity and unique approach to every client make the difference. We are thrilled to share our valuable knowledge of industry and impactful techniques how to win the perfect employer. </p>

                </div>
                <div className="teamCards">
                    <div>
                    <Card style={{ width: '20rem' }}>
      <Card.Img className="st" variant="top" src={imageOne}/>
      <Card.Body>
        <Card.Title>Inessa Riley</Card.Title>
        <Card.Text>
          13 Years in Hotel Operations, including Front Office, Guest Experience and Quality Management.
        </Card.Text>
        <Card.Link href="#"><img src={linkedIn} alt="icon"/></Card.Link>
      </Card.Body>
    </Card>
                    </div>

                    <div>
                    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imageTwo} className="teamImage"/>
      <Card.Body>
        <Card.Title>Maain Shahid</Card.Title>
        <Card.Text>
          14 Years in Hotel Operations, including Front Office, Food and Beverage, Guest Experience.
        </Card.Text>
        <Card.Link href="#"><img src={linkedIn} alt="icon"/></Card.Link>
      </Card.Body>
    </Card>
                    </div>

                    <div>
                    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imageThree} />
      <Card.Body>
        <Card.Title>Anna Kornik</Card.Title>
        <Card.Text>
          10 Years in Food & Beverage including Hotel Operations and independent Restaurants.
        </Card.Text>
        <Card.Link href="#"><img src={linkedIn} alt="icon"/></Card.Link>
      </Card.Body>
    </Card>
                    </div>
                </div>
                <hr className="rounded"></hr>
            </section>
          
    )
}
export default Team;