import React from "react";
import { Link } from "react-router-dom";

const Category = (props)=>{
    var id=props.id;

    

    return (
           
               <div>
                <span>{props.name}</span>
                <span>{props.desc}</span>
                </div>
               
           
         

    )

}
export default Category; 