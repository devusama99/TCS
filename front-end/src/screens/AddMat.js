import {
  Card,
  Container,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

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
  input: {
    display: "none",
  },
}));

function AddMat() {
  const classes = new styles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h2" color="secondary">
        Add Material
      </Typography>
      <Card className={classes.card}>
        <input
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <Button variant="contained" color="primary">
          Change Name
        </Button>
      </Card>
    </Container>
  );
}

export default AddMat;
