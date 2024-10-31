import React from 'react';
import NavGrid from '../HomeSections/NavGrid';
import About from '../HomeSections/About';
import Team from '../HomeSections/Team';
import Services from '../HomeSections/Services';
import Booking from '../HomeSections/Booking';
import cover from '../cover.mp4';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Home () {
    useGSAP(() => {
        gsap.to (".header", {y:-400, duration: 7})
    });
    return (
        <div>
      <NavGrid/>

        <section id="home">
           
                <video autoPlay muted loop>
                    <source src={cover} type="video/mp4" />
                </video>
               
                    <h1 className='header'>Ready to take the Plunge into Hospitality Career?</h1>
            
        </section>
<About/>
<Team/>
<Services/>
<Booking/>
        </div>

    )
}
export default Home;