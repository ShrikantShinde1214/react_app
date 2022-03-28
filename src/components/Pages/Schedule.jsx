import React, { useState,useEffect } from "react";
import {FaPlusCircle} from "react-icons/fa";
import "../Design/Schedule.css";
import Card from "./Cards";
import CreateTask from "../../Configs/CreateTask";


const Schedule = () => {

  //And Then copy from reactstrap useState...!
  const [modal, setModal] = useState(false);
  
  //And Then set your modal to opposite of previous modal State...!
  const toggle = () => {
    setModal(!modal)
  }

  const[taskList, setTaskList] = useState([]);

   useEffect(() =>{
     let arr = localStorage.getItem("taskList")
     if(arr){
      let obj = JSON.parse(arr)
       setTaskList(obj)
     }
   },[])//Empty Array Do Not Reloading In Again and Again
  
  const saveTask = (taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))//Temporoery Data Stored In LocalStorage.!
    setModal(false)
    setTaskList(tempList)
  }


  const deleteTask =(index) =>{//TO Deleted Task
    let tempList = taskList
    tempList.splice(index,1)
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTaskList(taskList)
    window.location.reload()
  }

  const updateListArray = (obj, index) =>{
    let tempList = taskList
    tempList[index]=obj
    localStorage.setItem("taskList" ,JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  return (
    <React.Fragment>

      <div className="schedule-list">
        <FaPlusCircle className="add-icon" onClick={() => setModal(true)} />
          <div className="card_component">
          {taskList && taskList.map((obj ,index)=> <Card taskObj = {obj} index={index} deleteTask={deleteTask} updateListArray ={updateListArray}/>) }
          </div >
      </div>
          {/* { //send The Data Using Props.! */} 
      <CreateTask toggle={toggle} modal={modal} save ={saveTask} />
      
    </React.Fragment>
  )
}

export default Schedule;