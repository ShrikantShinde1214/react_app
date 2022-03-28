import React,{useState} from "react";
import "../../components/Design/Cards.css";
import EditTask from "../../Configs/EditTask";
import {FaPen,FaTrashRestoreAlt } from "react-icons/fa";

const Cards = ({ taskObj, index, deleteTask,updateListArray }) => {

  const [modal, setModal ] = useState(false)

  const toggle = () =>{
    setModal(!modal)
  }

  const updateTask = (obj) =>{
    updateListArray(obj , index)
  }

  const handleDelete = () =>{
    deleteTask(index)
  }
  
//HTML Code
  return (
    <React.Fragment>
      <div className="card-style">
        <div className="card-left">
          <h3 className="category">{taskObj.Name} </h3>
        </div>
        <div className="card-right">
          <h6 className="discription">{taskObj.Description} </h6>
          <div className="edit-delete-btn">
            <FaPen className="edit-btn" onClick={() => setModal(true)} />
            <FaTrashRestoreAlt className="delete-btn" onClick = {handleDelete} />
          </div>
        </div>
        <EditTask modal={modal} toggle ={toggle} updateTask={updateTask} taskObj ={taskObj}/>
      </div>
    </React.Fragment>
  )
}

export default Cards;