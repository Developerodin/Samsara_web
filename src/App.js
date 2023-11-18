import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './Pages/Home';
import {SignUp} from "./Pages/SignUp"
import {Login} from "./Pages/Login"
import {Articles} from "./Pages/Articles"
import {Pricing} from "./Pages/Pricing"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       
          <Route path='/' element={<Login/>} /> 
          <Route path='/signup' exact element={ <SignUp/>} />
          <Route path='/login' exact element={ <Login/>} />
          <Route path='/articles' exact element={ <Articles/>} />
          <Route path='/pricing' exact element={ <Pricing/>} />
          
    </Routes>      
    </BrowserRouter>
    </div>
  );
}

export default App;
