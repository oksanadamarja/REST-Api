import './App.css';
import Nav from './Nav.js';
import AllCustomers from './AllCustomers';
import {BrowserRouter as Router , Switch, Route} from  'react-router-dom';
import BronzCustomers from './BronzCustomers';
import SilverCustomers from './SilverCustomers';
import GoldCustomers from './GoldCustomers'
import Child from './OneCustomer';

function App(){
  return (
    <Router>
    <div className="App">
     <Nav/>
     <Switch> 
     
     <Route path = "/customers"  exact component = {AllCustomers}></Route>
     <Route path = "/bronzCustomers" component ={BronzCustomers}></Route>
     <Route path = "/silverCustomers" component ={SilverCustomers}></Route>
     <Route path = "/goldCustomers" component ={GoldCustomers}></Route>
     <Route path = "/homepage" component ={Home}></Route>
     <Route path="/customers/:id" children = {<Child/>} />
     <Route path = "/" exact component ={Home}></Route>
     </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>    
  </div>
);

export default App;
