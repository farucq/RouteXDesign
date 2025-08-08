import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroCar from './Components/HeroCar/HeroCar';
import CarsSection from './Components/Cars/CarsSection';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroCar/>
      <CarsSection/>
      <Footer/>
    </div>
  );
}

export default App;
