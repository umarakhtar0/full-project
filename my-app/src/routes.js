import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from './components'
import Pages from './pages'
import Events from './events';






export default function Index() {
  return (
    <BrowserRouter>


      <Routes>
    
        <Route path="/*" element={<Components/>} />
        <Route path="/pages/*" element={<Pages />} />
        <Route path="/events/*" element={<Events/>} />
    

       

      </Routes>
    

    </BrowserRouter>
  )
}
