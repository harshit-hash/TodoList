import logo from './logo.svg';
import './App.css';
import Container from './Component/Container';
import ContextApi from './Component/API/ContextApi';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Footer from './Component/Navbar/Footer';


function App() {
  return (

   
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
   
    </BrowserRouter>
      
    
  );
}

export default App;
