
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
function App() {
  return (
    <div className="App" >
      <Router>
    <div className="App">
      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>

        </div>
      </div>
    </div></Router>
      
    </div>
  );
}

export default App;
