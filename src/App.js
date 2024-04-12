import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">o autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania"/>
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
