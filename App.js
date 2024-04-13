import React, { useEffect, useState } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import Signup from "./Signup";


function App() {
  const [userName , setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function LoginPage() {
  return (
    <>
      <Login />
    </>
  )
}

/*function CheckoutPage() {
  return (
    <>
      <Header name={userName} />
      <Checkout />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header name={userName} />
      <Home />
    </>
  );
}*/

function CheckoutPage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <>
      <Header name={userName} />
      <Checkout />
    </>
  );
}

function HomePage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <>
      <Header name={userName} />
      <Home />
    </>
  );
}


function SignupPage(){
  return(
    <>
    <Signup />

    </>
  )
}

/*function App() {
  return (
    <Router>
      <div className="App">
          <Route path='/checkout'>
            <Header />
            <h1>checkout pg</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
      </div>
    </Router>
  );
}*/

/*function App() {
  return (
    <div className="app">
        <Header />
        <Home />
    </div>
  );
}*/



/*import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;*/

export default App;
