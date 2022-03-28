import React from "react";
import "../Design/CategoryList.css";

const CategoryCards = ({ taskObj }) => {
  return (
    <div className="category-List" >
        <hr />
        <h4 >{taskObj.Name} </h4>
     
    </div>
  )
}
export default CategoryCards;
