import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
      <Route path='/' exact element={<Home/>} /> 
      </Routes>
    </Router>
  </>
  );
}

export default App;
