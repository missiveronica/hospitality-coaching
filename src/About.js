import React from "react";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from './Assets/bell.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from "./Slides";




function About () {

    useEffect(() => {
        AOS.init();
      }, [])

    const [quote, setQuote] =useState("");
    useEffect (() => {
        getQuote();

    }, [])
    const getQuote  = async() => {
        const response = await fetch (`https://api.quotable.io/random`);
        const data = await response.json();
        setQuote(data.content)
    }

    useGSAP(() => {
        gsap.to (".bell", {rotation: 20, repeat:-1, duration: 3})
    });
    return (
        <div>
        <section id ="about">
            <div className="blockOne">
            <h2 className="subHeader">WHO WE ARE</h2>
            <div data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-opacity="0">
          <p className="title">Personalized.</p>
          <p className="title">Efficient.</p>
          <p className="title">Caring.</p>
          <p className="title">Committed.</p>
          </div>
</div>
       <div className="blockTwo">
       <div>
          <p className="titleTwo">Experts in Hospitality Industry with over 10 years of experience. You can rely on us.</p>
          <img className="bell" src={image} alt ="bell"/>

    </div>
        <div className="qB">
        <Card className="quote">
      <Card.Header>Quote of the Day</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p>"{quote}"</p> 
        </blockquote>
      </Card.Body>
    </Card>
           <button className="but" onClick={getQuote}>Get My Daily Motivation Now</button>
     </div>
        </div>

        <div className="aboutHeader">
     <h4>Landing your Dreamjob couldn't be easier with our support! Which type of property are you up to?</h4>
     </div>
     <div className="slideBox">
<Slides/>
     </div>


        </section>
      
        
        <hr className="rounded"></hr>
      
        </div>

    )
}
export default About;