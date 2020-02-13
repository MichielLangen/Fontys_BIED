import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      projects: [
        {
          id: 1,
          name: "Project inzicht in eenzaamheid"
        },
        {
          id: 2,
          name: "Project B"
        }
      ]
    };

    this.handleNewProject = this.handleNewProject.bind(this);
    this.goToProject = this.goToProject.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleNewProject() {
    this.handleOpen();
  }

  goToProject() {
    this.props.history.push({ pathname: "/project" });
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "100%",
          marginTop: "50px",
          position: "relative"
        }}
      >
        <Typography
          style={{ marginLeft: "480px", marginBottom: "10px" }}
          color="textPrimary"
          variant="h5"
          component="h2"
        >
          Your projects
        </Typography>
        <Grid justify="center" container spacing={10}>
          <Grid item md={2}>
            <Card style={{ width: "300px", height: "200px" }}>
              <CardContent>
                <Button onClick={this.handleNewProject} size="small">
                  Create New Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {this.state.projects.map(project => (
            <Grid item md={2}>
              <Card
                style={{
                  width: "300px",
                  height: "200px",
                  marginBottom: "10px"
                }}
              >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography color="textSecondary">{project.id}</Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={this.goToProject} size="small">
                    Go to..
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={{
            marginLeft: "40%",
            marginTop: "10%"
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "300px"
            }}
          >
            <Card
              style={{
                width: "300px",
                height: "200px",
                marginBottom: "10px"
              }}
            >
              <CardContent>
                <Typography
                  color="textPrimary"
                  variant="h5"
                  component="h2"
                  gutterBottom
                >
                  Create a new project
                </Typography>
              </CardContent>
              <CardActions>
                <TextField id="standard-basic" label="Project name" />
                <Button onClick={this.handleClose} size="small">
                  Create
                </Button>
              </CardActions>
            </Card>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectList;
