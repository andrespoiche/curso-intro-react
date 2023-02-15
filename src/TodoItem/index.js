import React from "react";
import './TodoItem.css'
import { IconContext } from "react-icons";
import { FiCheck, FiX } from "react-icons/fi";

function TodoItem(props){

    
    return(
        <IconContext.Provider value={{
            color: "lightblue",
            size: "1em"
        }
        }>
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
                >
            <FiCheck className=""/>
             </span>
             <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                >
            <FiX color="violet"/>
            </span>
        </li>
        </IconContext.Provider>
    );
}

export {TodoItem};