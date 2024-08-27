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
import MainComponent from './MainComponent';




function App() {
 

  return (
    <div className="App">
<Home/>     
<About/>
<Team/>
<Services/>
<Router>
        <Routes>
          <Route path = '/firstPage' element = {<MainComponent/>}/>
          </Routes>
    </Router>
<Booking/>


    </div>
  );
}

export default App;
