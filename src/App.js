import React, { useState } from 'react'
import About from './About';
import Blog from './Blog';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </div>
        </BrowserRouter >
    )
}

export default App