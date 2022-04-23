import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from '../component/Navbar';
import Main from "../pages/Main"

const Approuter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Approuter