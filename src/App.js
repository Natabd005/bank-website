import logo from './logo.svg';
import './App.css';
import Header from "./header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import About from './about';
import Sectors from './sectors';
import Enroll from './enroll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/about' element={
  <div className="App">
   <Header/>
   <About />
   <Footer/>
    </div>

} ></Route>

    <Route path='/sectors' element={
  <div className="App">
   <Header/>
   <Sectors />
   <Footer/>
    </div>

} ></Route>
<Route path='/enroll' element={
  <div className="App">
   <Header/>
   <Enroll />
   <Footer/>
    </div>

} ></Route>
<Route path='/' element={
  <div className="App">
   <Header/>
   <Home />
   <Footer/>
    </div>

} ></Route>
    </Routes>
   
    
    </BrowserRouter>
   
  );
}

export default App;
