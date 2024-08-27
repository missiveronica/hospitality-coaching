import React from 'react';
import NavGrid from './NavGrid';
import cover from './cover.mp4';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Home () {
    useGSAP(() => {
        gsap.to (".header", {y:-400, duration: 7})
    });
    return (
        <div>
        <NavGrid />
        <section id="home">
            <div>
                <video autoPlay muted loop>
                    <source src={cover} type="video/mp4" />
                </video>
                <div className='center'>
                    <h1 className='header'>Ready to take the Plunge into Hospitality Career?</h1>
                </div>
            </div>
        </section>
        </div>

    )
}
export default Home;