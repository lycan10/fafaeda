import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutPage/AboutUs';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='about' element={ <AboutUs /> }/>
      <Route path='contact' element= {<ContactPage />} />
      <Route path='project' element={ <ProjectPage /> } />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App