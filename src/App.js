// import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nabbar1 from './components/Nabbar1';
import Projects from './components/Projects';

function App() {
  return (
    // <div className="App">
    <>
      <NavBar />
     {/* <Nabbar1 /> */}
      <Header />
      <Projects />
      <Footer />
      </>
    // </div>
  );
}

export default App;
