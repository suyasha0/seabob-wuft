import React, { Component } from 'react';
import logo from './td.png';
import './App.css';
import Fetch from 'react-fetch';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {contacts: []}
  }


  fetchData(){
    fetch('https://api-wufthacks.xlabs.one:8243/facebookGraphAPI/1.0.0/v2.11/me?access_token=EAACD7kf3Pg8BANrTtBmJRfyk2gHYjSY1kWx9lCoHNPPak3osdyYHIh8kV8IfQrUSpvRYMRuZCQSqpYa4fPeImHYlH3TFu4EOue2Re56EZCpIAQjWlufIM4HuZCAItt8O5jxEZB2ZAv4T933jCIeb3ZBqjOFNG5dBmrOTU1o8hyiwZDZD&fields=cover%2Cname%2Cid%2Cabout', {
      headers: {
        "Accept": "application/json",
        "X-Api-Key": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYW1lc2FydGh1ciIsImV4cCI6MTUxODUzMjIxOH0.-RMBLl5LQXVSyK3HOaJtoz3tJzictVIYo_ePC-fcYGNDyFjQ8QK-zSnEiDbpWCvPafjG8g3ptz3fauvbcsvTGg",
        "Authorization": "Bearer d515abaf-dcf7-341e-ac14-099b63c5c1c3",
       // "Cache-Control": "no-cache",
       // "Postman-Token": "f0136045-e306-276a-e410-efbea980d06a",
        "Access-Control-Allow-Origin":'*'
      }
    })
    .then(response=>response.json())
    .then(parsedJSON => parsedJSON.results.map(user =>({
      name:`${user.gender}`
        }
      )))
      .then(contacts => this.setState({contacts}))
      .catch(error => console.log('parsing failed',error))
  }


  render() {
    const {contacts} = this.state;
    return (
      /*
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
        */
      <div className="App">
              <button className="btn btn-sm btn-danger" onClick={(e) => {
                        this.fetchData();    
                    }}>Fetch now</button>
        <div className="App-container">
        <div className="App-sidebar"> <img src={logo} className="App-logo" alt="logo" /></div>
        <div className="App-title">Customer Profile</div>
            <div className="App-pic" />
            <div className="App-desc"> 
            <div id="name">Firstname Last</div> 
            <div>Gender</div>
            <div>Birth</div>
            </div>
            <div className="App-input" />
            </div>
<div className="panel-group">
       {
           contacts.length > 0 ? contacts.map(contact => {
               const {name} = contact;
               return <h1 title={name}>
               </h1>
           }) : null
       } 
       </div>

            

     </div> 
    );
  }
}






/*

xhr.open("GET", "");
xhr.setRequestHeader("Accept", "text/javascript");
xhr.setRequestHeader("Authorization", "Bearer d515abaf-dcf7-341e-ac14-099b63c5c1c3");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "f0136045-e306-276a-e410-efbea980d06a");

xhr.send(data);

*/

export default App;
