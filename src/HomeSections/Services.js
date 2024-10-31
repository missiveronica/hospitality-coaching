import React, { useMemo, useState } from 'react';
import {
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pictureOne from '../Assets/CardPictures/compass.jpg';
import pictureTwo from '../Assets/CardPictures/pathway.jpg';
import pictureThree from '../Assets/CardPictures/tree.jpg';
import pictureFour from '../Assets/CardPictures/grass.avif';
import { attributes } from './attributes';



function Services () {
const [text, setText] = useState ("");
const [search, setSearch] = useState("");

const handleText = (e) => {
setText (e.target.value);
}
const handleSearch = () => {
  setSearch(text);
}
const filteredAttributes = useMemo (
  () => attributes.filter((attribute) => {
    return attribute.item.toLowerCase().startsWith(search.toLowerCase())
  }),[search])  

    return(
            <section id ="services">
                <div className="serviceContainer">
                    <h2 className="subHeader">YOUR JOURNEY WITH US</h2>
                </div>
                <div className='serviceBoxText'>
                  
                  <p>Being overwhelmed with the career path is natural. Especially when you are starting, changing or redirecting it. We have been there! The essential part of this journey is to feel supported to boost your motivation and confidence.</p>
                    <p>Here are Career Intelligence Attributes which are incorporated in our Career Pathway methology and will help you to thrive.</p> 
                  <input className='inputBox' placeholder ="✍🏼 Type 1 letter coming to your mind now..."  type ="text" onChange={handleText}/>
                  <button className='searchBtn' onClick={handleSearch}>🔍 Search your Attribute</button>
                  
                  <div className='box'>

                  {filteredAttributes.map((filteredAttribute) => (
                    <p key ={filteredAttribute.id}>{filteredAttribute.item}: {filteredAttribute.description} </p>
                  )
                )}
                </div>
               

                </div>
                <h3>Let's start our Journey together...</h3>
<div>
                <CardGroup>
      <Card className="bg-dark text-white">
        <Card.Img variant="top" src={pictureOne} alt="cardImage"/>
        <Card.ImgOverlay>
        <Link className='cardTitle' to = '/pathway/all-encompassing'>
        <Card.Title>All-Encompassing Pathway</Card.Title> 
        </Link>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text className='cardText'>
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
        <Link className='cardTitle' to = '/pathway/alignment'>
        <Card.Title>Pathway Alignment</Card.Title> 
        </Link>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text className='cardText'>
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
        <Link className='cardTitle' to = '/pathway/one-of-a-kind'>
        <Card.Title>One Of A Kind Pathway</Card.Title> 
        </Link>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text className='cardText'>
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
        <Link className='cardTitle' to = '/pathway/open'>
        <Card.Title>Open Pathway</Card.Title> 
        </Link>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text className='cardText'>
            Let's customize your journey as per your own needs. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-white">Duration: Variable</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    <hr className="rounded"></hr>
                </section>
    )
}
export default Services;