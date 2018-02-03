import React, { Component } from 'react';
import logo from './td.png';
import './App.css';
import Fetch from 'react-fetch';

var request = new Request('https://api-wufthacks.xlabs.one:8243/facebookGraphAPI/1.0.0/v2.11/me?access_token=EAACD7kf3Pg8BANrTtBmJRfyk2gHYjSY1kWx9lCoHNPPak3osdyYHIh8kV8IfQrUSpvRYMRuZCQSqpYa4fPeImHYlH3TFu4EOue2Re56EZCpIAQjWlufIM4HuZCAItt8O5jxEZB2ZAv4T933jCIeb3ZBqjOFNG5dBmrOTU1o8hyiwZDZD&fields=cover%2Cname%2Cid%2Cabout%2C%20gender',{
  headers: new Headers({"Accept": "application/json",
       "Authorization": "Bearer d515abaf-dcf7-341e-ac14-099b63c5c1c3",})
});

//var customerName;

class App extends Component {

fetchData(){
fetch(request).then(response=>response.json())
.then(responseData=>{
//this.customerName = JSON.stringify(responseData.name, null, 2);
//console.log(customerName);
});
}


  render() {
    return (
      <div className="App">
              <button className="btn btn-sm btn-danger" onClick={(e) => {
                        this.fetchData();    
                    }}>Fetch now</button>
        <div className="App-container">
        <div className="App-sidebar"> <img src={logo} className="App-logo" alt="logo" /></div>
        <div className="App-title">Customer Profile</div>
            <div className="App-pic" />
            <div className="App-desc"> 
            <div id="name">Name</div> 
            <div>Gender</div>
            <div>Age</div>
            <div>Preferred Language: ENGLISH</div>
            </div>
            <div className="App-calls">
              <h4>Call History</h4>
              <table class="table text-center">
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>2/1/2018</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>3:00:03</td>
                </tr>
                <tr>
                  <td>Issue</td>
                  <td>Lorem Epsum</td>
                </tr>
                <tr>
                  <td>Employee</td>
                  <td>Paw Newman</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className="App-input"><h3>Reason for calling: </h3> 
            <form>
            <label>
              <input type="text" name="issue" />
            </label>
            <input type="submit" value="Submit" />
            </form> </div>
            <div className="App-transactions">
              <h4>Transaction History</h4>
              <table class="table text-center">
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>Amount</td>
                </tr>
                <tr>
                  <td>2/2/2018</td>
                  <td>$8.97</td>
                </tr>
                <tr>
                  <td>1/27/18</td>
                  <td>$42.50</td>
                </tr>
                <tr>
                  <td>1/24/18</td>
                  <td>$9.73</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className="App-personal">
              <h4>Personal</h4>
              <table class="table text-center">
              <tbody>
                <tr>
                  <td>Hobbies</td>
                  <td>Golf, Chess</td>
                </tr>
                <tr>
                  <td>Marital Status</td>
                  <td>Married</td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>Spanish, English</td>
                </tr>
                <tr>
                  <td>Subscriptions</td>
                  <td>Amazon Prime, Netflix</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className="App-social">
            <h4>Professional History</h4>
              <table class="table text-center">
              <tbody>
                <tr>
                  <td>Profession</td>
                  <td>Civil Engineer</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>MTA</td>
                </tr>
                <tr>
                  <td>Estimated Salary</td>
                  <td>$70,000 - $80,000</td>
                </tr>
                <tr>
                  <td>Highest Education</td>
                  <td>NYU Tandon, Engineering BS</td>
                </tr>
              </tbody>
            </table></div>
            </div>
     </div> 
    );
  }
}

export default App;