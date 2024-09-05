import React, { useMemo, useState } from 'react';
import {
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pictureOne from './CardPictures/compass.jpg';
import pictureTwo from './CardPictures/pathway.jpg';
import pictureThree from './CardPictures/tree.jpg';
import pictureFour from './CardPictures/grass.avif';


const attributes = [
  {id: "1", item: "Reliability", description: "If you say you’ll do something, do it. It’s simple as that."},
  {id: "2", item: "Ownership", description: "Take accountability for your work, your decisions, and be honest when you make mistakes."},
  {id: "3", item: "Courage", description: "Speak up, make yourself known, raise your hand, be seen, challenge yourself, take on the hard project"},
  {id: "4", item: "Advocate for Self", description: "If you don’t ask, you may not get. "},
  {id: "5", item: "Presence", description: "How people experience you leads to opportunities.."},
  {id: "6", item: "Inquisitiveness", description: "Never stop learning, ask questions, don’t make assumptions, and remain curious."},
  {id: "7", item: "Humility", description: "Open yourself up. It’s okay to be real and vulnerable."},
  {id: "8", item: "Flexibity", description: "Be prepared for change, be open to it, embrace it, and be a champion of it"},
  {id: "9", item: "Uniqueness", description: "Stand out:look to how you can contribute in your own unique and creative way!"},
  {id: "10", item: "Example", description: "Be the change you want to see"},
  {id: "11", item: "Genuity", description: "Don’t sacrifice what you believe to be morally right, fair, and proper."},
  {id: "12", item: "Kindness", description: "While the squeaky wheel may seem to win out more often than it should, it’s limited and short term and is coupled with little respect and little followership."},
  {id: "13", item: "Determination", description: "The best way to start is to… start and continue stepping forward in the spirit of progress and with the confidence of seeing achievement. "},
  {id: "14", item: "Joy", description: "The best stress reliever is a healthy serving of humor!!!"},
  {id: "15", item: "Servant Leadership", description: "If you focus on taking care of your people vs. your people taking care of you – you’ll achieve incredible things"},
  {id: "16", item: "Build Relationships", description: "Get to know them, and let them get to know you."},
  {id: "17", item: "Limitlessness", description: "Don’t settle for mediocrity, even if others are okay with it."},
  {id: "18", item: "Moral Compass", description: "You have to feel good about what you’re doing and how you’re doing it. "},
  {id: "19", item: "Nourished care of Self", description: "Look after yourself in ensuring you’re healthy and well balanced."},
  {id: "20", item: "Quality", description: "Take pride in the work and service you offer. "},
  {id: "21", item: "Thankfulness", description: "A dash of simple gratitude brings much flavor to the day and a smile on most any face!"},
  {id: "22", item: "Value", description: "Leave your footprint!"},
  {id: "23", item: "Well-organized", description: "End and start your day with your plan. "},
  {id: "24", item: "Xanadu", description: "Make time for a ritual providing a sense of peace and serenity!"},
  {id: "25", item: "Yielder", description: "Contribute to the success!"},
  {id: "26", item: "Zeal", description: "Your energy spills over to those around you."},

] 

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
        <div>
            <section id ="services">
                <div className="serviceContainer">
                    <h2 className="subHeader">YOUR JOURNEY WITH US</h2>
                </div>
                <div className='serviceBoxText'>
                  
                  <p>Being overwhelmed with the career path is natural. Especially when you are starting, changing or redirecting it. We have been there! The essential part of this journey is to feel supported to boost your motivation and confidence.</p>
                    <p>Here are Career Intelligence Attributes which are incorporated in our Career Pathway methology and will help you to thrive.</p> 
                  <input className='inputBox' placeholder ="Type any 1 letter coming to your mind now..."  type ="text" onChange={handleText}/>
                  <button className='searchBtn' onClick={handleSearch}>Search your Attribute</button>
                  
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
        <Link className='cardTitle' to = '/firstPage'>
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
        <Link className='cardTitle' to = '/secondPage'>
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
        <Link className='cardTitle' to = '/thirdPage'>
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
        <Link className='cardTitle' to = '/forthPage'>
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
                </section>
                <hr className="rounded"></hr>

        </div>
    )
}
export default Services;