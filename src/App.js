import './App.css';
import NavGrid from './NavGrid';
import cover from './cover.mp4';

function App() {
  return (
    <div className="App">
      <NavGrid/>
      <div>
      <video autoplay muted loop>
        <source src = {cover} type="video/mp4"/>      
        </video>
        <h1>Ready to the Plunge into Hospitality Career?</h1>
        </div>

    </div>
  );
}

export default App;
