import React from "react";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    return (
        <div>
        <section id ="about">
            <h2>WHO WE ARE</h2>
            <div data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-opacity="0">
          <p className="title">Personalized.</p>
          <p className="title">Efficient.</p>
          <p className="title">Caring.</p>
          <p className="title">Committed.</p>
          </div>
        </section>
        <div>
           <p >{quote}</p> 
           <button onClick={getQuote}>Get My Daily Motivation Now</button>
        </div>
        </div>

    )
}
export default About;