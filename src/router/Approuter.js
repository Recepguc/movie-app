import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from '../component/Navbar';

const Approuter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={}
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Approuter