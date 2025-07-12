import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner2/Banner2';
import Banner3 from './Components/Banner3/Banner3';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </div>
  );
}

export default App;
