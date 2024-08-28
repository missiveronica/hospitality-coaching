import React from 'react';
import './App.css';
import Home from './Home';
import {
BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllEncompassingPathway from './AllEncompassingPathway';





function App() {
 

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path = '/firstPage' element = {<AllEncompassingPathway/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
