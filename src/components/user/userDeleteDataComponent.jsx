import React, { Component } from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class UserDeleteData extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit() {
    confirmAlert({
      title: "Confirm delete",
      message:
        "Are you sure you want to delete your account? This can not be undone",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.history.push({ pathname: "/deletedUser" })
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <Button
          style={{ margin: "50px" }}
          variant="contained"
          color="secondary"
          onClick={this.submit}
        >
          Delete all my user data
        </Button>
      </div>
    );
  }
}

export default UserDeleteData;
