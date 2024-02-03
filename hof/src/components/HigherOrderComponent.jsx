import React, { Component } from "react";

export class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  // display all items
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //based on userType
  renderUserType = () => {
    const data = this.state.userData;
    const map = data
      .filter((item) => {
        return item.user_type == "Designer";
      })
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
    return map;
  };

  //first letter starting with J
  renderFristLetter = () => {
    const data = this.state.userData;
    const first = data
      .filter((item) => {
        return item.name[0] == "J";
      })
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
    return first;
  };

  renderAge = () => {
    const data = this.state.userData;
    const age = data
      .filter((item) => {
        return item.age > 28 && item.age <= 50;
      })
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
    return age;
  };

  renderYears = () => {
    const data = this.state.userData;
    const sum = data.reduce((total, item) => total + item.years, 0);
    return sum;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>
        <h1>Display Designers</h1>
        <div className="display-box">
          <ul>{this.renderUserType()}</ul>
        </div>
        <h1>Display whose name starts with J</h1>
        <div className="display-box">
          <ul>{this.renderFristLetter()}</ul>
        </div>
        <h1>Display by age </h1>
        <div className="display-box">
          <ul>{this.renderAge()}</ul>
        </div>
        <h1>Display total working hours</h1>
        <div className="display-box">
          <div>{this.renderYears()}</div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
