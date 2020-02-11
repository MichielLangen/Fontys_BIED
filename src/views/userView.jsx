import React, { Component } from "react";
import UserProfile from "../components/user/userProfileComponent";
import UserDeleteData from "../components/user/userDeleteDataComponent";
import { Button } from "@material-ui/core";

class UserView extends Component {
  state = {};
  render() {
    return (
      <div>
        <UserProfile />
        <UserDeleteData {...this.props} />
      </div>
    );
  }
}

export default UserView;
