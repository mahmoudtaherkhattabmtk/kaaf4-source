import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
//En pages
import Home from "./components/Home";
import About from "./components/About";
import Facts from './components/Facts';
import Exp from "./components/Exp";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

//AR pages 
import Arhome from "./components/AR/Arhome";
import Arabout from "./components/AR/Arabout";
import Arportfolio from "./components/AR/Arportfolio";
import Arfacts from "./components/AR/Arfacts";
import Arexp from "./components/AR/Arexp";
import Arcontact from "./components/AR/Arcontact";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* Main Content */}
        <div className="sections">
          <Routes>
            {/* English */}
            <Route path="/" exact element={<Home />} />
            <Route path="/kaaf3" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/kaaf3/about" exact element={<About />} />
            <Route path="/facts" exact element={<Facts />} />
            <Route path="/exp" exact element={<Exp />} />
            <Route path="/port" exact element={<Portfolio />} />
            <Route path="/kaaf3/port" exact element={<Portfolio />} />
            <Route path="/contact" exact element={<Contact />} />
            {/* <Route path="/AR" exact element={<AR />} /> */}
            <Route path="*" element={<NotFound />} />

            {/* Arabic */}
            <Route path="/ar" exact element={<Arhome />} />
            <Route path="/arKaaf3" exact element={<Arhome />} />
            <Route path="/arabout" exact element={<Arabout />} />
            <Route path="/arkaaf3/arabout" exact element={<Arabout />} />
            <Route path="/arfacts" exact element={<Arfacts />} />
            <Route path="/arexp" exact element={<Arexp />} />
            <Route path="/arport" exact element={<Arportfolio />} />
            <Route path="/arkaaf3/arport" exact element={<Arportfolio />} />
            <Route path="/arcontact" exact element={<Arcontact />} />
            {/* <Route path="/AR" exact element={<AR />} /> */}
            {/* <Route path="*" element={<ArNotFound />} /> */}
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
