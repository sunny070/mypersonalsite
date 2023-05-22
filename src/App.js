import React from 'react';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import Personalproject from './components/Pages/Personalproject';
import Skills from './components/Pages/Skills';
import Workexperience from './components/Pages/Workexperience';
import Education from './components/Pages/Education';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/mypersonalsite/" exact Component={Home}/>
        <Route path="/education" exact Component={Education}/>
        <Route path="/skills" exact Component={Skills}/>
        <Route path="/workexperience" exact Component={Workexperience}/>
        <Route path="/personalproject" exact Component={Personalproject}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;
