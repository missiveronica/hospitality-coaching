import About from './About';
import './App.css';
import NavGrid from './NavGrid';
import cover from './cover.mp4';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function App() {
  useGSAP(() => {
      gsap.to (".header", {y:-400, duration: 5})
  });
  return (
    <div className="App">
      <NavGrid/>
      <section id ="home">
      <div>
      <video autoplay ="true" muted loop>
        <source src = {cover} type="video/mp4"/>      
        </video>
        <h1 className='header'>Ready to take the Plunge into Hospitality Career?</h1>
        </div>
        </section>
<About/>




    </div>
  );
}

export default App;
