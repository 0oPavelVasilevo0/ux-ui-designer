// import './App.css';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectsWeb from './components/ProjectsWeb';
import TypeProjects from './components/TypeProjects';
import Home from './components/Home';
import Info from './components/Info';
import ScrollToTop from './utils/scrollToTop';
import ProjectDetails from './components/ProjectDetails';
import ProjectsGraphic from './components/ProjectsGraphic';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<TypeProjects />} />
          <Route exact path='/info' element={<Info />} />
          <Route exact path='/web_projects' element={<ProjectsWeb />} />
          <Route exact path='/graphic_projects' element={<ProjectsGraphic />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
