import './App.css';
import { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import OneCustomer from './OneCustomer';
import React, { useState , useEffect } from 'react'

const UserList = ({ id ,setID }) => {
    const [resources, setResources] = useState([])
  
    const fetchResource = async () => {
      const response = await axios.get(
        'https:localhost:3000/api/customers',
      )
      setResources(response.data.results)
    }
  
    useEffect(() => {
      fetchResource()
    }, [])
    return (
        <ul>
          { resources
               .filter(user => Boolean(id) ? user.login.uuid === id : true )
               .map(item => (
               <li key={item.Customer_id}>
                 <div>
                   <h2>{item.Country} {item.Adress}</h2>
                   { Boolean(id) ? 
                     <button onClick={() => setID(null)}>
                       Hide
                     </button>
                     :
                     <button onClick={() => setID(item.login.uuid)}>
                       Details
                     </button> 
                    }
                 </div>
               </li>
              ))}  
        </ul>
               )

}
  export default UserList