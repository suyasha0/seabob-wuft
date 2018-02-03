import React, { Component } from 'react';
import logo from './td.png';
import './App.css';

class App extends Component {
  render() {
    return (
      /*
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
        */
      <div className="App">
        <div className="App-container">
        <div className="App-sidebar"> <img src={logo} className="App-logo" alt="logo" /></div>
        <div className="App-title">Customer Profile</div>
        </div>
      </div>
    );
  }
}


/*

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});


xhr.open("GET", "https://api-wufthacks.xlabs.one:8243/facebookGraphAPI/1.0.0/v2.11/me?access_token=EAACD7kf3Pg8BANrTtBmJRfyk2gHYjSY1kWx9lCoHNPPak3osdyYHIh8kV8IfQrUSpvRYMRuZCQSqpYa4fPeImHYlH3TFu4EOue2Re56EZCpIAQjWlufIM4HuZCAItt8O5jxEZB2ZAv4T933jCIeb3ZBqjOFNG5dBmrOTU1o8hyiwZDZD&fields=cover%2Cname%2Cid%2Cabout");
xhr.setRequestHeader("Accept", "text/javascript");
xhr.setRequestHeader("Authorization", "Bearer d515abaf-dcf7-341e-ac14-099b63c5c1c3");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "f0136045-e306-276a-e410-efbea980d06a");

xhr.send(data);

*/

export default App;
