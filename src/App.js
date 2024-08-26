import React from 'react';
import About from './About';
import './App.css';
import Team from './Team';
import Services from './Services';
import Booking from './Booking';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import AllEncompassingPathway from './AllEncompassingPathway';




function App() {
 

  return (
    <div className="App">
<Home/>     
<About/>
<Team/>
<Services/>
<Booking/>
<div>
    <Router>
        <Routes>
          <Route path = '/firstPage' element = {<AllEncompassingPathway/>}/>
        </Routes>
        </Router>
  </div>

    </div>
  );
}

export default App;
