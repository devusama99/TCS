import {
  Card,
  Container,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const styles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  card: {
    padding: theme.spacing(4),
    boxShadow: "none",
    border: "1px solid grey",
    width: "90%",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    minHeight: "150px",
    justifyContent: "space-evenly",
  },
}));

function EditClass() {
  const classes = new styles();
  const [classTitle, setclassTitle] = useState("");

  function setClassName() {
    axios
      .put("http://localhost:3000/admin/class:4", {
        name: classTitle,
      })
      .then((res) => console.log("Updated Successfully"))
      .catch((err) => console.log(err));
  }
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h2" color="secondary">
        Edit Class
      </Typography>
      <Card className={classes.card}>
        <TextField
          id="filled-basic"
          label="Class Name"
          variant="filled"
          on
          onChange={(e) => setclassTitle(e.target.value)}
          value={classTitle}
        />
        <Button variant="contained" color="primary" onClick={setClassName}>
          Change Name
        </Button>
      </Card>
    </Container>
  );
}

export default EditClass;
