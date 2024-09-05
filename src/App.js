import React from 'react';
import './App.css';
import Home from './Home';
import {
BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllEncompassingPathway from './AllEncompassingPathway';
import PathwayAlignment from './PathwayAlignment';
import OneOfAKindPathway from './OneOfAKindPathway';
import OpenPathway from './OpenPathway';





function App() {
 

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path = '/firstPage' element = {<AllEncompassingPathway/>}/>
      <Route path = '/secondPage' element = {<PathwayAlignment/>}/>
      <Route path = '/thirdPage' element = {<OneOfAKindPathway/>}/>
      <Route path = '/forthPage' element = {<OpenPathway/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
