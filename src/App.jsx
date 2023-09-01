import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">Shabab Salehin Weather APP<br/>        
        <a target="_blank" href="https://shababsalehin.github.io/WeatherApp-ReactJS/" style={{ color: 'yellow' }}>Live Link<br/></a>
        ©Copyright 2023 || All Rights Reserved
      </div>
    </React.Fragment>
  );
}

export default App;
