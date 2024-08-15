import About from './About';
import './App.css';
import NavGrid from './NavGrid';
import cover from './cover.mp4';

function App() {
  return (
    <div className="App">
      <NavGrid/>
      <div>
      <video autoplay ="true" muted loop>
        <source src = {cover} type="video/mp4"/>      
        </video>
        <h1 className='header'>Ready to take the Plunge into Hospitality Career?</h1>
        </div>
<About/>




    </div>
  );
}

export default App;
