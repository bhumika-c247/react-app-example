// import logo from './logo.svg';
import './App.css';
import Test from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/class'>Class Component</Link>
              </li>
              <li>
                <Link to='/functional'>FunctionalComponent</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/class/:id'>
              <Test />
            </Route>
            <Route path='/functional'>
              <FunctionalComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
