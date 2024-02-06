import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Tech from './Components/Tech';
import './App.css';
import Company from './Components/Company';
import Rating from './Components/Rating';
import ChooseComponent from './Components/ChooseComponent';
import SecondLast from './Components/SecondLast';
import Footer from './Components/Footer';
import Page0 from './Components/Page0';

function App() {

  return (
    
    <div className='overflow-hidden'>
      <Page0/>
      <Navbar />
      <Home />
      <Tech />
      <Company/>
      <Rating/>
      <ChooseComponent/>
      <SecondLast/>
      <Footer/>
      </div>
  );
}

export default App;
