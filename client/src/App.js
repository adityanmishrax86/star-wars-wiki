import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PlanetContainer from "./components/planet/PlanetContainer";
import Home from "./components/Home/Home";
import PeopleContainer from "./components/people/PeopleContainer";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/planets" component={PlanetContainer} />
            <Route path="/peoples" component={PeopleContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
