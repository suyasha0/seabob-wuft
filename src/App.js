import React, { Component } from 'react';
import logo from './td.png';
import './App.css';
import Fetch from 'react-fetch';

var request = new Request('https://api-wufthacks.xlabs.one:8243/facebookGraphAPI/1.0.0/v2.11/me?access_token=EAACD7kf3Pg8BANrTtBmJRfyk2gHYjSY1kWx9lCoHNPPak3osdyYHIh8kV8IfQrUSpvRYMRuZCQSqpYa4fPeImHYlH3TFu4EOue2Re56EZCpIAQjWlufIM4HuZCAItt8O5jxEZB2ZAv4T933jCIeb3ZBqjOFNG5dBmrOTU1o8hyiwZDZD&fields=cover%2Cname%2Cid%2Cabout%2C%20gender',{
  headers: new Headers({"Accept": "application/json",
       "Authorization": "Bearer d515abaf-dcf7-341e-ac14-099b63c5c1c3",})
});

var globalName;
var globalGender;
var globalBirthday;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name : "",
      gender : "",
      work : "",
      birthday : "",
      education : "",
      interests : "",
      relationship_status : "",

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

  render() {
    this.fetchData();
    return (
      <div className="App">
        <div className="App-container">
        <div className="App-sidebar"> <img src={logo} className="App-logo" alt="logo" /></div>
        <div className="App-title">Customer Profile</div>
            <div className="App-pic" />
            <div className="App-desc">
            <Person name={this.state.name}/>
            <Person gender={this.state.gender}/>
            <Person birthday={this.state.birthday}/>
            <div>Language: ENGLISH</div>
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
            <div className="App-specs">
              <p>Estimated Salary: $20,000-$30,000</p>
            </div>
            <div className="App-social" />
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

export default App;
