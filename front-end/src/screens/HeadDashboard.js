import { Container, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

const styles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "50px",
    width: "100%",
  },
  //   Card Styling
  card: {
    cursor: "pointer",
  },
  p5: {
    padding: "20px",
  },
});

function HeadDashboard() {
  const classes = new styles();
  const [table, setTable] = useState("");
  let showTable;
  let ClassesData;
  let StudentsData;
  let TeachersData;

  axios
    .get("http://localhost:3000/head/View-Dashboard")
    .then((Response) => {
      TeachersData = Response[0];
      StudentsData = Response[1];
      ClassesData = Response[2];
    })
    .catch((err) => console.log(err));

  const teachersTable = (
    <MaterialTable
      style={{
        width: "100%",
      }}
      columns={[
        { title: "Name", field: "name" },
        { title: "Designation", field: "designation" },
      ]}
      data={
        TeachersData
          ? TeachersData
          : [{ name: "Muhammad Umair", designation: "Lecturer" }]
      }
      title="Teachers"
    />
  );

  const studentsTable = (
    <MaterialTable
      style={{
        width: "100%",
      }}
      columns={[
        { title: "Name", field: "name" },
        { title: "Registration Number", field: "rollno" },
      ]}
      data={
        StudentsData
          ? StudentsData
          : [{ name: "Muhammad Usama", rollno: "fa18-bcs-073" }]
      }
      title="Students"
    />
  );

  const classesTable = (
    <MaterialTable
      style={{
        width: "100%",
      }}
      columns={[{ title: "Name", field: "name" }]}
      data={ClassesData ? ClassesData : [{ name: "TCS-1" }]}
      title="Classes"
    />
  );
  if (table == "students") {
    showTable = studentsTable;
  } else if (table === "teachers") {
    showTable = teachersTable;
  } else if (table === "classes") {
    showTable = classesTable;
  } else {
    showTable = "";
  }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.flex}>
        <Card
          className={[classes.p5, classes.card].join(" ")}
          onClick={() => {
            setTable("teachers");
          }}
        >
          <Typography>Teachers</Typography>
        </Card>
        <Card
          className={[classes.p5, classes.card].join(" ")}
          onClick={() => {
            setTable("students");
          }}
        >
          <Typography>Students</Typography>
        </Card>
        <Card
          className={[classes.p5, classes.card].join(" ")}
          onClick={() => {
            setTable("classes");
          }}
        >
          <Typography>Classes</Typography>
        </Card>
      </div>
      {showTable}
    </Container>
  );
}

export default HeadDashboard;
