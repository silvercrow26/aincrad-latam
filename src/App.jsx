import { useState } from 'react'
import 'animate.css';
import './App.css';
import {AuthProvider} from '../src/firebase/context/AuthContext';
import { HomeRouter } from './components/routes/HomeRouter';
import { DocsProvider } from './firebase/context/DocsContext';


function App() {
  return (
    <>
        <AuthProvider>
          <DocsProvider>
          <HomeRouter/>
          </DocsProvider>
        </AuthProvider>
    </>
  )

}

export default App
