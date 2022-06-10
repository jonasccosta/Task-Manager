import React from 'react';
import {CgClose, CgInfo} from "react-icons/cg";
import "./Task.css";
import {useHistory } from 'react-router-dom';


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    };
    
    return (
        <div  className='task-containter' 
        style = {task.completed ? {borderLeft: '6px solid crimson'}: {}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
                </div>
            <div className='buttons-containter'>
                <button className='see-task-detail-button'
                    onClick = {handleTaskDetailsClick}>
                    <CgInfo/>
                    </button>
                
                <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose/>
                    </button>
                
            </div>
        </div>
    );
}
 
export default Task;