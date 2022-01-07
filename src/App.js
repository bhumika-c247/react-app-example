// import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const App = () => {
  axios.defaults.baseURL = 'https://fakestoreapi.com';
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
            {/* url params */}
            <Route path='/class' component={ClassComponent}>
              {/* <ClassComponent {...props} /> */}
            </Route>
            {/* query params */}
            <Route path='/functional' component={FunctionalComponent}>
              {/* /functional?id=1&name=bhumika */}
              {/* <FunctionalComponent {...props} /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
