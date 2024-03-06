import React, { useState } from 'react';
import { PencilSquare, Trash, ThreeDotsVertical} from 'react-bootstrap-icons';

  export default function Todo() {

  const [tasks, setTasks] = useState([]);
  const [newtasks, setNewtasks] = useState('');

  const [filter, setFilter] = useState('pending');

  const [showEditModal, setShowEditModal]=useState(false);
  
  const [editTasks, setEditTasks] = useState('');
  const [editTasksIndex, setEditTasksIndex] = useState(null);

  const HandelInputChange = (event) => {
    setNewtasks(event.target.value);
  };

  const HandleCreateTask = () => {
    if (newtasks.trim() !== '') {
      setTasks([...tasks, { text: newtasks, done: false}]);
      setNewtasks('');
    }
  };

  const handleTaskCheckboxChange = (index) => {
   const updatedtasks = [...tasks];
   updatedtasks[index].done = !updatedtasks[index].done;
   setTasks(updatedtasks);
  };

  const handleEditTask = (index) => {
   setEditTasks(tasks[index].text);
    setEditTasksIndex(index);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
     if (editTasks.trim() !== '') {
      const updatedtasks = [...tasks];
      updatedtasks[editTasksIndex].text = editTasks;
      setTasks(updatedtasks);
    setShowEditModal(false);
  }
  };

  const handleDeleteTask = (index) =>{
   const updatedtasks = [...tasks];
    updatedtasks[index].deleted = true;
    setTasks(updatedtasks);
  };

   const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  return(

    <div className= "container">

      <div className="row mt-2">
        <div className="col-lg-11 ">
          <h1>ToDo List</h1>
        </div>

        <div className="col-lg-1">
          <div className= "dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>

                 <ul className="dropdown-menu">
                  <li className="dropdown-item" type="button" onClick={() => handleFilter('pending')}>Pending</li>
                  <li className="dropdown-item" type="button" onClick={() => handleFilter('done')}>Done</li>
                  <li className="dropdown-item" type="button" onClick={() => handleFilter('deleted')}>Deleted</li>
                 </ul>

          </div>
        </div>
      </div>

      <div className="row mt-2">
         <div className="input-group mb-2">
         <textarea
            className="form-control"
            placeholder="Add your task here"
            value={newtasks}
            onChange={HandelInputChange}
         />
         <button className="btn btn-primary" type="button" onClick={HandleCreateTask} >Create Task</button>       
         </div>
      </div>

      <div className="row mt-4">
         <ul className="list-group">
           
           {tasks.map((task, index) => (
           ((filter === 'pending' && !task.done && !task.deleted) ||
           (filter === 'done' && task.done) ||
           (filter === 'deleted' && task.deleted)) ? (

            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
               <input 
               type="checkbox" 
               checked={task.done}
               onChange={() => handleTaskCheckboxChange(index)}/>

               <span className={task.done ? 'text-muted text-decoration-line-through' : ''}>
                {task.text}
               </span>

               <div className="dropdown">
                  <ThreeDotsVertical type="button" data-bs-toggle="dropdown" aria-expanded="false" size={20} color="black"/>
                    <ul className="dropdown-menu">
                       <li className="dropdown-item" type="button" onClick={() => handleEditTask(index)}><PencilSquare className="mx-2" size={20} color="black" /> Edit</li>
                       <li className="dropdown-item" type="button" onClick={() => handleDeleteTask(index)}><Trash className="mx-2" size={20} color="black" /> Delete</li>
                    </ul>
               </div>
            </li>    
            ):null ))}
         </ul>
      </div>
        
      {showEditModal && ( 
      <div className= "modal" id="editmodal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
       <div className="modal-dialog">
         <div className="modal-content">

           <div className="modal-header">
              <h5 className="modal-title" id="examplemodalLabel">Edit Task</h5>
           </div>

           <div className="modal-body">
              <input 
              type="text"
              classNam="form-control"
              value={editTasks} 
              onChange={(e) => setEditTasks(e.target.value)}
              />
           </div>

           <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>Save</button>
           </div>

         </div>
       </div>
      </div>  
      )}    
    </div>
  );
}

