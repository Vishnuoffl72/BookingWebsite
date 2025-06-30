import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster} from 'react-hot-toast'
import Theaters from './pages/Theaters'
import Releases from './pages/Releases'
import Movies from './pages/Movies'

const App = () => {

  const isAdminLogin = useLocation().pathname.startsWith('/admin')

  return (
    <>
    
      <Toaster/>
      {!isAdminLogin && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/theaters' element={<Theaters/>} />
        <Route path='/releases' element={<Releases/>} />
      </Routes>
      {!isAdminLogin && <Footer/>}
    </>
    
  )
}

export default App
