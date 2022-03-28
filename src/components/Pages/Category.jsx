import React,{useState, useEffect} from "react";
import "../Design/Category.css";
import CreateTask from "../../Configs/CreateTask";
import CategoryCards from "./CategoryCards"
const Category = () => {

  const[taskList, setTaskList] = useState([]);

   useEffect(() =>{
     let arr = localStorage.getItem("taskList")
     if(arr){
      let obj = JSON.parse(arr)
       setTaskList(obj)
     }
   },[])//Dont Repeat Reloading.!
  
  const saveTask = (taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
  }
  
//HTML Code
  return (
    <React.Fragment>
      <div className="category_list">
       <div>
         {taskList && taskList.map((obj ,index)=> <CategoryCards taskObj = {obj} index={index} />) }
       </div>
      </div>
      <CreateTask save={saveTask}/>
      <div>
      </div>
    </React.Fragment>
    )
  }

  
export default Category;