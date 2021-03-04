import './App.css';
import { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class AllCustomers extends Component{
  constructor(){
    super();
    this.state = {
      customers: "There are no customers yet."
    };
    
  }
  componentDidMount = () => {
    axios.get("/api/customers").then(response =>{
      this.setState ({   
        customers: response.data.map(customers => {
          return <Link to= {`customers/${customers.Customer_id}`}  
          activeClassName="active" class = "links"> <li>{customers.Customer_name}</li></Link>
        })
      })
    });
  };
  
  render(){
    return (
      <div className="App">
       <h1>Here you can see all the customers:</h1>
       <p>{this.state.customers}</p>
      </div>
    );
  }
}