import React, { Component } from "react";
//import navComponent from "../components/navigation/navComponent";

class HomeView extends Component {
  state = {};
  render() {
    return <div>{this.props.history.push({ pathname: "/login" })}</div>;
  }
}

export default HomeView;
