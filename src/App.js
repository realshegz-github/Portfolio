import React from 'react';
import './App.css';
import { BrowserRouter,
          Routes, // Just Use Routes instead of "Switch"
          Route } from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import Main from './Component/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Main/>
          <About/>
        {/* <Navbar /> */}
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/transaction" element={<AuthRoute Component={Transaction} />} />
          <Route exact path="/homepage" element={<AuthRoute Component={Transfer} />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
