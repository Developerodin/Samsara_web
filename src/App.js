import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './Pages/Home';
import {SignUp} from "./Pages/SignUp"
import {SignUp2} from "./Pages/Signup2"
import {Login} from "./Pages/Login"
import {Articles} from "./Pages/Articles"
import {Pricing} from "./Pages/Pricing"
import { ConformationPage } from './Pages/ConformationPage';
import { TrainersSignup } from './Pages/TrainersSignup';
import { EventsDetails } from './Pages/Events/EventsDetails';
import { Events } from './Pages/Events/Events';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       
          <Route path='/' element={<SignUp2/>} /> 
          <Route path='/signup' exact element={ <SignUp2/>} />
          <Route path='/trainers-signup' exact element={ <TrainersSignup/>} />
          <Route path='/login' exact element={ <Login/>} />
          <Route path='/articles' exact element={ <Articles/>} />
          <Route path='/pricing' exact element={ <Pricing/>} />
          <Route path='/conformation' exact element={ <ConformationPage/>} />
          <Route path='/event' exact element={ <Events/>} />
          <Route path='/event-details/:eventId/:userId' exact element={ <EventsDetails/>} />
          
    </Routes>      
    </BrowserRouter>
    </div>
  );
}

export default App;
