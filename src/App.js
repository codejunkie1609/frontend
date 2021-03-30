import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import Admin from './components/admin.component';
import orderHistoryA from './components/adminOrderHistory/orderHistory';
import orderHistoryU from './components/userOrderHistory/orderHistory';

function App() {
  return (
    <div className="App">
    
  
    <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/addProduct" component={Admin}/>
            <Route path="/admin/orders" component={orderHistoryA}/>
            <Route path="/orders" component={orderHistoryU}/>
          </Switch>
    </Router> 
    </div>
  );
}

export default App;
