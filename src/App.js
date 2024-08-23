import About from './About';
import './App.css';
import NavGrid from './NavGrid';
import cover from './cover.mp4';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Team from './Team';
import Services from './Services';
import Booking from './Booking';


function App() {
  useGSAP(() => {
      gsap.to (".header", {y:-400, duration: 7})
  });
  return (
    <div className="App">
      <NavGrid/>
      <section id ="home">
      <div>
      <video autoPlay muted loop>
        <source src = {cover} type="video/mp4"/>      
        </video>
        <div className='center'>
        <h1 className='header'>Ready to take the Plunge into Hospitality Career?</h1>
        </div>
        </div>
        </section>
<About/>
<Team/>
<Services/>
<Booking/>




    </div>
  );
}

export default App;
