// import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects from './components/Projects';
import TypeProjects from './components/TypeProjects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import GraphicDesign from './components/GraphicDesign';
import Info from './components/Info';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    // <div className="App">
    <>
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<TypeProjects />} />
          <Route exact path='/info' element={<Info />} />
          <Route exact path='/web_projects' element={<Projects />} />
          <Route exact path='/graphic_projects' element={<GraphicDesign />} />
      {/* <Header /> */}
      {/* <TypeProjects /> */}
      {/* <Projects /> */}
      </Routes>
      <Footer />
      </Router>
      </>
    // </div>
  );
}

export default App;
