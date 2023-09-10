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

function App() {
  return (
    // <div className="App">
    <>
    <Router>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
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
