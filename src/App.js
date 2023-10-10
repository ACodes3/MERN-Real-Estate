import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import FontStyles from './components/FontStyles';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import { About } from './pages/About';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <FontStyles />
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/listing' element={<Listings/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
