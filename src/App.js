import React, { Component } from 'react';
import logo from './td.png';
import './App.css';
import Fetch from 'react-fetch';

var request = new Request('https://api-wufthacks.xlabs.one:8243/facebookGraphAPI/1.0.0/v2.11/me?access_token=EAACD7kf3Pg8BANrTtBmJRfyk2gHYjSY1kWx9lCoHNPPak3osdyYHIh8kV8IfQrUSpvRYMRuZCQSqpYa4fPeImHYlH3TFu4EOue2Re56EZCpIAQjWlufIM4HuZCAItt8O5jxEZB2ZAv4T933jCIeb3ZBqjOFNG5dBmrOTU1o8hyiwZDZD&fields=cover%2Cname%2Cid%2Cabout%2C%20gender',{
  headers: new Headers({"Accept": "application/json",
       "Authorization": "Bearer d515abaf-dcf7-341e-ac14-099b63c5c1c3"})
});

var requestTwo = new Request('https://api-wufthacks.xlabs.one:8243/td/transaction/V1.0.0/transaction/all?page=1&size=3',{
  headers: new Headers({
       "Accept":"*/*",
       "Authorization": "Bearer 39978d51-2251-3a32-a9d8-4de1819a0795",
       "X-Api-Key":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYW1lc2FydGh1ciIsImV4cCI6MTUxODU3MjMzOH0.CJ2ah0SXnBPa4OKlrYb413vU_f2PHLBeQcAYeMtpOUrzcLWHLX2dpDbJlwsmErsitTvDeXKPzM2Vpx3jIEHWuw"})
});

var globalName;
var globalGender;
var globalBirthday;

var globalDate1;
var globalAmount1;
var globalDate2;
var globalAmount2;
var globalDate3;
var globalAmount3;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name : "",
      gender : "",
      birthday : "",

      date1: "",
      date2: "",
      date3: "",
      amount1: "",
      amount2: "",
      amount3: ""
    }
  }

fetchData(){
  fetch(request).then(response=>response.json())
  .then(responseData=>{
    globalName = responseData.name;
    globalGender = responseData.gender;
    globalBirthday = responseData.birthday;
    if(this.state.name === ""){
      this.setState({
        name: globalName
      });
    }
    if(this.state.gender === ""){
      this.setState({
        gender: globalGender
      });
    }
    if(this.state.birthday === ""){
      this.setState({
        birthday: globalBirthday
      });
    }
  });
}

fetchDataTwo(){
  fetch(requestTwo).then(response=>response.json())
  .then(responseData=>{
    console.log(responseData.content[0]);
    globalAmount1 = responseData.content[0].amount;
    globalDate1 = responseData.content[0].transactionDate;
    globalAmount2 = responseData.content[1].amount;
    globalDate2 = responseData.content[1].transactionDate;
    globalAmount3 = responseData.content[2].amount;
    globalDate3 = responseData.content[2].transactionDate;
    if(this.state.date1 === ""){
      globalDate1 = new Date(globalDate1);
      globalDate1 = globalDate1.toLocaleDateString("en-US");
      this.setState({
        date1: globalDate1
      });
    }
    if(this.state.amount1 === ""){
      this.setState({
        amount1: globalAmount1
      });
    }
    if(this.state.date2 === ""){
      globalDate2 = new Date(globalDate2);
      globalDate2 = globalDate2.toLocaleDateString("en-US");
      this.setState({
        date2: globalDate2
      });
    }
    if(this.state.amount2 === ""){
      this.setState({
        amount2: globalAmount2
      });
    }
    if(this.state.date3 === ""){
      globalDate3 = new Date(globalDate3);
      globalDate3 = globalDate3.toLocaleDateString("en-US");
      this.setState({
        date3: globalDate3
      });
    }
    if(this.state.amount3 === ""){
      this.setState({
        amount3: globalAmount3
      });
    }
  });
}

  render() {
    this.fetchData();
    this.fetchDataTwo();
    return (
      <div className="App">
        <div className="App-container">
        <div className="App-sidebar"> <img src={logo} className="App-logo" alt="logo" /></div>
        <div className="App-title"><Person name={this.state.name}/></div>
            <div className="App-pic" />
            <div className="App-desc">
            <Person gender={this.state.gender}/>
            <Person birthday={this.state.birthday}/>
            <div>Preferred Language: ENGLISH</div>
            <div> Primary : (646)-908-2301 </div>
            <div> Secondary: (646)-921-2222 </div>
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
            <div className="App-balance">12</div>
            <div className="App-input"><h3>Reason for calling: </h3>
            <form>
            <label>
              
              <textarea rows="8" cols="50">
              Insert brief summary of complaint here.
              </textarea>
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
                  <td>{this.state.date3}</td>
                  <td>{this.state.amount3}</td>
                </tr>
                <tr>
                  <td>{this.state.date2}</td>
                  <td>{this.state.amount2}</td>
                </tr>
                <tr>
                  <td>{this.state.date1}</td>
                  <td>{this.state.amount1}</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div id="rec" className="App-personal">
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

class Person extends React.Component{
  render(){
    return (
      <div>
        <div id="name">{this.props.name}</div>
        <div id="gender">{this.props.gender}</div>
        <div id="birthday">{this.props.birthday}</div>
      </div>
    )
  }
}

class Transaction extends React.Component{
  render(){
    return (
      <div>
        <div class="date">{this.props.date1}</div>
        <div class="amount">{this.props.amount1}</div>
        <div class="date">{this.props.date2}</div>
        <div class="amount">{this.props.amount2}</div>
        <div class="date">{this.props.date3}</div>
        <div class="amount">{this.props.amount3}</div>
      </div>
    )
  }
}

export default App;
