import React,{useState} from "react";
import "../components/Design/Modal.css";
import { Button, Modal,ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle,save }) => {

    const [category, setCategory] = useState("");
    const [discription, setDiscription] = useState("");
    
    //Comparision Of Names And Values.!
    const handleChange = (e) =>{
        const {name,value} = e.target
        if(name === "category"){
            setCategory(value)
        }
        else{
            setDiscription(value)
        }
    }
    
    // TaskObj in these array in push.!
    let handleSave = () =>{
        let taskObj = {}
        taskObj["Name"] = category
        taskObj["Description"] = discription
        save(taskObj)
    }

    return (
       <Modal className="modal_css" isOpen={modal} toggle={toggle}>
           <ModalHeader className="modalHeader" toggle={toggle}>Create A Task</ModalHeader>
           <ModalBody className="modalBody">
               <form>
                    <div className="form-group">
                        <label>Choose Task Category</label>
                        <input type="text" className = "form-control" value = {category} onChange = {handleChange} name = "category"/>
                    </div>
                    <div className="from-group">
                         <label>Task Discription</label>
                        <textarea rows="2" className='form-control textArea' value={discription} onChange = {handleChange} name="discription"/>
                    </div>
               </form>
           </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>
            <Button color="danger" onClick={toggle}>Cancel</Button>
            </ModalFooter>
       </Modal>

    )
}

export default CreateTask;