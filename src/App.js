import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import DieuHuongURL from './router/DieuHuongURL'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <DieuHuongURL />
      </div>
    </Router>
  );
}

export default App;
