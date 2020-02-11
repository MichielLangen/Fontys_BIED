import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function createUserData(id, name, gender, email, birthday, phonenumber) {
  return { id, name, gender, email, birthday, phonenumber };
}

function createLocationData(id, latitude, longitude, city, country) {
  return { id, latitude, longitude, city, country };
}

const screenData = {
  labels: ["Music", "Social Media", "Games"],
  datasets: [
    {
      data: [15, 6, 3],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
    }
  ]
};

const userRows = [
  createUserData(
    1,
    "Tally, Halfhide",
    "Male",
    "thalfhide0@abc.net.au",
    "06/04/1999",
    "+968 368 747 5951"
  )
];

const locationRows = [
  createLocationData(1, "52.211713", "6.8954592", "Rotterdam", "Netherlands"),
  createLocationData(1, "52.3636588", "4.9355226", "Nijmegen", "Netherlands")
];

export default function UserProfile() {
  return (
    <div style={{ marginLeft: "10px" }}>
      <h2>User data</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Birthday</TableCell>
              <TableCell align="right">Phonenumber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.birthday}</TableCell>
                <TableCell align="right">{row.phonenumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>Location data</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">latitude</TableCell>
              <TableCell align="right">longitude</TableCell>
              <TableCell align="right">city</TableCell>
              <TableCell align="right">country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locationRows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.latitude}</TableCell>
                <TableCell align="right">{row.longitude}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>Screentime data</h2>

      <MDBContainer style={{ width: "60%" }}>
        <Pie data={screenData} options={{ responsive: true }} />
      </MDBContainer>
    </div>
  );
}
