import React, { useState } from 'react';
import { Button, Container, Form, ListGroup, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import { PencilSquare, Trash, Check, ThreeDotsVrtical} from 'react-bootstrap-icons';

function Todo() {

  return(

    <div className= "container">

      <div className="row mt-2">
      <div className="col-lg-11 ">
      <h1>ToDo List</h1>
      </div>

      <div className="col-lg-1">
       <div className= "dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter
          </button>

                 <ul className="dropdown-menu">
                  <li className="dropdown-item" type="button">Pending</li>
                  <li className="dropdown-item" type="button">Done</li>
                  <li className="dropdown-item" type="button">Deleted</li>
                 </ul>

         </div>
         </div>
         </div>

         <div className="row">
         <div className="input-group mb-2">
         <input 
            type="text"
            className="form-control"
            placeholder="Add your task here"
         />
         <button className="btn btn-primary" type="button" >Create Task</button>       
         </div>
         </div>



    </div>


    );
  
}

export default Todo;
