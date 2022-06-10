import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return (
        <>
        <div className='back-button-containter'>
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>

        <div className="task-details-containter">
            <h2>{params.taskTitle}</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </>
      );
}
 
export default TaskDetails;