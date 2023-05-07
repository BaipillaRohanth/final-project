import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Land from './components/Land';
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import Industrial from './components/Industrial';
import Login from './components/Login';
import FeedBack from './components/FeedBack';
import Contact from './components/Contact';
import Astrology from './components/Astrology';
import Payment from './components/Payment';
import ConfirmPayment from './components/ConfirmPayment';
import Agents from './components/Agents';
import Register from './components/Register';
import OurSelves from './components/OurSelves';
import Profile from './components/Profile';
import Aboutus from './components/Aboutus';
import Pay from './components/Pay';
import NoMatch from './components/NoMatch';
import Homeidentifier from './components/Homeidentifier';
import ChatBot from './components/ChatBot';
import Receipt from './components/Receipt';
import Admin from './components/Admin';
import Bidding from './components/Bidding';
function App() {
  return (
    <Router>
      
      <Navbar/>

    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/ourselves' element={<OurSelves/>}/>
      <Route exact path='/land' element={<Land/>}/>
      <Route exact path='/login' element={<Login/>}/> 
      <Route exact path='/residential' element={<Residential/>}/>
      <Route exact path='/commercial' element={<Commercial/>}/>
      <Route exact path='/industrial' element={<Industrial/>}/>
      <Route exact path='/feedback' element={<FeedBack/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/astrology' element={<Astrology/>}/>
      <Route exact path='/payment' element={<Payment/>}/>
      <Route exact path='/confirm' element={<ConfirmPayment/>}/>
      <Route exact path='/agents' element={<Agents/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/about' element={<Aboutus/>}/>
      <Route exact path='/pay' element={<Pay/>}/>
      <Route exact path='/homeidentifier' element={<Homeidentifier/>}/>
      <Route exact path='/chatbot' element={<ChatBot/>}/>
      <Route exact path='/receipt' element={<Receipt/>}/>
      <Route exact path='/admin' element={<Admin/>}/>
      <Route exact path='/bidding' element={<Bidding/>}/>
      <Route exact path='/*' element={<NoMatch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
