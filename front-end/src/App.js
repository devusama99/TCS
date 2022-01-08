import HeadDashboard from "./screens/HeadDashboard";
import EditClass from "./screens/EditClass";
import AddMat from "./screens/AddMat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/"} exact component={EditClass} />
          <Route path={"/head/dashboard"} component={HeadDashboard} />
          <Route path={"/teacher/addMat"} component={AddMat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
