import React, { useState, useEffect } from "react";
import './App.css';
import Auth from './Components/Auth/Auth'
import Footer from "./Components/Site/Footer";
import Header from "./Components/Site/Header";
import Sidebar from "./Components/Site/Sidebar";
import Home from "./Components/Site/Home";
import {
  BrowserRouter as Router
} from 'react-router-dom';


function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);

  const updateLocalStorage = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  };

  // const clearLocalStorage = () =>{
  //   localStorage.clear();
  //   setSessionToken(undefined);
  // };

  const viewConductor = () => {
    return sessionToken !== undefined ? <Home sessionToken={sessionToken} /> : <Auth updateLocalStorage={updateLocalStorage} />;
  };

  return (
    <div className="App">
      <Header />
      <Router>
      {viewConductor()}
        <Sidebar />
      </Router>
      <Footer />
      <h1>This is a test</h1>
      {sessionToken}
      {/* <Navbar clearLocalStorage={clearLocalStorage} /> */}
    </div>
  );
}

export default App;