import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact";
import Errorpage from "./components/Errorpage";
import About from "./components/About";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Website from "./components/Website";
import Services from "./components/Services";
import Subscription from "./components/Subscription";
function App(){
  return(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'about'} element={<About/>}>
      <Route path="Website" element={<Website/>}></Route>
      <Route path="Services" element={<Services/>}></Route>
      <Route path="Subscription" element={<Subscription/>}></Route>
      </Route>
      <Route path={'/contact'} element={<Contact/>}></Route>
      <Route path={'/product'} element={<Product/>}></Route>
      <Route path={'/Login'} element={<Login/>}></Route>
      <Route path={'/*'} element={<Errorpage/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App