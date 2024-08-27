import {
    Link
  } from "react-router-dom";

function MainComponent() {
    return( 
<div>
    <nav>
    <Link to="/firstPage">Services</Link>
    </nav>
    <h1>Home</h1>
    </div>
    )
}

export default MainComponent;