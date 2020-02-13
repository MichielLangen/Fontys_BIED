import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

class UserEmpty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  render() {
    switch (this.state.loaded) {
      case true:
        return (
          <h2 style={{ marginLeft: "10px" }}>Data for this user was deleted</h2>
        );
      case false:
        return (
          <div>
            <LinearProgress />
            <div style={{ display: "none" }}>
              {setTimeout(() => {
                this.setState({
                  loaded: true
                });
              }, 2000)}
            </div>
          </div>
        );
      default:
        break;
    }
  }
}

export default UserEmpty;
