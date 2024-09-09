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
      <Route path = '/AllEncompassingPathwayPage' element = {<AllEncompassingPathway/>}/>
      <Route path = '/PathwayAlignmentPage' element = {<PathwayAlignment/>}/>
      <Route path = '/OneOfAKindPathwayPage' element = {<OneOfAKindPathway/>}/>
      <Route path = '/OpenPathwayPage' element = {<OpenPathway/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
