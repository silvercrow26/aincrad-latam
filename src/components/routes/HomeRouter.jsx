import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage';
import { RustPage } from '../pages/RustPage';
import { UnturnedPage } from '../pages/UnturnedPage';


export const HomeRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='rust' element={<RustPage />} />
            <Route path='unturned' element={<UnturnedPage/>}/>

            <Route path='*' element={<ErrorPage />} />
        </Routes>
    </>
  )
}
