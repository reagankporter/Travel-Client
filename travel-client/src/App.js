import React, { useState, useEffect } from "react";
import './App.css';
import Auth from './Components/Auth/Auth'
import Journal from './Components/Journals/Journals'

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

  const clearLocalStorage = () =>{
    localStorage.clear();
    setSessionToken(undefined);
  };

  const viewConductor = () => {
    return sessionToken !== undefined ? <Journal sessionToken={sessionToken} /> : <Auth updateLocalStorage={updateLocalStorage} />;
  };

  return (
    <div className="App">
      {/* <h1>This is a test</h1>
      {sessionToken} */}
      {/* <Navbar clearLocalStorage={clearLocalStorage} /> */}
      {viewConductor()}
    </div>
  );
}

export default App;
