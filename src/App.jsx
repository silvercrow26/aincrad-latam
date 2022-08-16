import { useState } from 'react'
import 'animate.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RustPage } from './components/pages/RustPage';
import { HomePage } from './components/pages/HomePage';
import { ErrorPage } from './components/pages/ErrorPage';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='rust' element={<RustPage />} />
      
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    </>
    
  )
}

export default App
