import React from 'react';
import About from './About';
import './App.css';
import Team from './Team';
import Services from './Services';
import Booking from './Booking';
import Home from './Home';
import NavGrid from './NavGrid';





function App() {
 

  return (
    <div className="App">
      <NavGrid/>
<Home/>     
<About/>
<Team/>
<Services/>
<Booking/>

    </div>
  );
}

export default App;
