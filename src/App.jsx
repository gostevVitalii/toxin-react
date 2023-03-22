import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'




function App() {
  return (
    <BrowserRouter>
      <div className="app__wrap">
        <Header />
        <div className="app__content">
          CONTENT
          <Routes>

            <Route />

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
