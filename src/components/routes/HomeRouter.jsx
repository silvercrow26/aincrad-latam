import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider} from '../../firebase/context/AuthContext';
import { Navbar } from '../Navbar';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { VelorenPage } from '../pages/VelorenPage';
import { UnturnedPage } from '../pages/UnturnedPage';


export const HomeRouter = () => {
  return (
    <>
    <AuthProvider>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='rust' element={<VelorenPage />} />
            <Route path='unturned' element={<UnturnedPage/>}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            {/* <Route path='*' element={<ErrorPage />} /> */}
        </Routes>
    </AuthProvider>
    </>
  )
}
