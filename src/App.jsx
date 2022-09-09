import { useState } from 'react'
import 'animate.css';
import './App.css';
import {AuthProvider} from '../src/firebase/context/AuthContext';
import { HomeRouter } from './components/routes/HomeRouter';


function App() {
  return (
    <>
        <AuthProvider>
          <HomeRouter/>
        </AuthProvider>
    </>
  )

}

export default App
