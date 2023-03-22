import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landing from './components/Landing/Landing'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'


function App() {
  return (
    <BrowserRouter>
      <div className="app__wrap">
        <Header />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
