import React, { Component } from "react";
import ProjectList from "../components/project/projectListComponent";
import Typography from "@material-ui/core/Typography";

class HomeView extends Component {
  state = {};
  render() {
    return (
      <div>
        <ProjectList {...this.props} />
      </div>
    );
  }
}

export default HomeView;
