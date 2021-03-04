import React from "react";
import "./App.css";
import {useParams,useLocation} from 'react-router-dom';
import CustomerDetails from './CustomerDetails';
import { useState } from 'react';
import UserList from './CustomerDetails';

const App = props => {
  const [id, setID] = useState(null)
  console.log(`Passed variable to App.js is: ` + id)

  return (
    <>
      <CustomerDetails id={id} setID={setID} />
    </>
  )
}
function Location() {
    return new URLSearchParams(useLocation().search);
  }

function ShowOneUser(){
  let query = Location();
   return(
       <div> 
           <header>
           <h3>  
               The id of the user you clicked is.
           </h3>
           
           </header>
           <Child id = {query.get("id")}/>
           <UserList id = {query.get("id")}/>
           
           
           
       </div>
   )
}

function Child() {
   let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
      <CustomerDetails id={id} />
    </div>
  );
  }


  

export default ShowOneUser;