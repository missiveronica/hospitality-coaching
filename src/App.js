import React from 'react';
import './App.css';
import Home from './Pages/Home';
import {
BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllEncompassingPathway from './Pages/AllEncompassingPathway';
import PathwayAlignment from './Pages/PathwayAlignment';
import OneOfAKindPathway from './Pages/OneOfAKindPathway';
import OpenPathway from './Pages/OpenPathway';





function App() {
 

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path = '/pathway/all-encompassing' element = {<AllEncompassingPathway/>}/>
      <Route path = '/pathway/alignment' element = {<PathwayAlignment/>}/>
      <Route path = '/pathway/one-of-a-kind' element = {<OneOfAKindPathway/>}/>
      <Route path = '/pathway/open' element = {<OpenPathway/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
