import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pictureOne from './CardPictures/compass.jpg';
import pictureTwo from './CardPictures/pathway.jpg';
import pictureThree from './CardPictures/tree.jpg';
import pictureFour from './CardPictures/grass.avif';
import AllEncompassingPathway from './AllEncompassingPathway';


function Services () {

    return(
        <div>
            <section id ="services">
                <div className="serviceContainer">
                    <h2>YOUR JOURNEY WITH US</h2>
                </div>
                <h3>Let's start our Journey together...</h3>
<div>
                <CardGroup>
      <Card className="bg-dark text-white">
       
        <Router>
      <Link to = '/firstPage'>
        <Card.Img variant="top" src={pictureOne} alt="cardImage"/>
        </Link>
        <Routes>
<Route path = '/firstPage' element = {<AllEncompassingPathway/>}/>
        </Routes>
        </Router>
      
        <Card.ImgOverlay>
        <Card.Title>All-Encompassing Pathway</Card.Title> 
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>
            Hand-in-hand mentorship and coaching programme to craft your career.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-white">Duration: 2 months</small>
        </Card.Footer>
      </Card>
      <Card className="bg-dark text-white">
        <Card.Img variant="top" src={pictureTwo} alt="cardImage"/>
        <Card.ImgOverlay>
        <Card.Title>Pathway Alignment</Card.Title> 
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>
            Identifying your unique career pathway and tools to achieve the results.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-white">Duration: 2 weeks</small>
        </Card.Footer>
      </Card>
      <Card className="bg-dark text-white">
        <Card.Img variant="top" src={pictureThree} alt="cardImage"/>

        <Card.ImgOverlay>
        <Card.Title>One Of A Kind Pathway</Card.Title> 
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>
            Finding your perfect job opportunity.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-white">Duration: 1 month</small>
        </Card.Footer>
      </Card>
      <Card className="bg-dark text-white">
        <Card.Img variant="top" src={pictureFour} alt="cardImage"/>
        <Card.ImgOverlay>
        <Card.Title>Open Pathway</Card.Title> 
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>
            Let's customize your journey as per your own needs. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-white">Duration: Variable</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
                </section>
                <hr className="rounded"></hr>

        </div>
    )
}
export default Services;