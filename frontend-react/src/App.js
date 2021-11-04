import React from 'react';
import Contador from './components/Contador';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 // NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="btn-group">
        <Link to="/contador" className="btn btn-dark">Inicio</Link>
       {/*  <Link to="/bla" className="btn btn-dark">Bla bla bla</Link>
        <NavLink to="/users" className="btn btn-dark" activeClassName="active">Users</NavLink>
       */}
       </div>
      <hr />
      <Switch>
        <Route path="/contador" exact>
          <Contador />
        </Route>
       {/*  <Route path="/bla">
          <Bla />
        </Route>
        <Route path="/users/:id" exact>
          <User />
        </Route>
        <Route path="/users">
          <Parametros />
        </Route> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
