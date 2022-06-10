import React, { useEffect, useState } from "react";
import './App.css'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Header from "./components/Header";
import { BrowserRouter as Router, Route}  from "react-router-dom";
import TaskDetails from "./components/TaskDetails";

const App = () => {

  const [tasks, setTasks] = useState([
  {
    id: '1',
    title: 'Estudar Programação',
    completed: false,
  },

  {
    id: '2',
    title: 'Ler',
    completed: true,
  }
  ]);

  useEffect(() => {
    const fetchTasks = async () =>{
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data);
    };

    fetchTasks();
   
  }, []);

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) return {... task, completed: !task.completed}
        return task;
      });


      setTasks(newTasks );
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <Router>
    <div className="containter">
      <Header/>
      <Route path = "/"exact render = {() => (
        <>
          <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
          <Tasks tasks = {tasks} 
        handleTaskClick = {handleTaskClick}
        handleTaskDeletion = {handleTaskDeletion}/>
        </>
      )}/>

      <Route path="/:taskTitle" exact component={TaskDetails}/>
      
    </div>
      
    </Router>
    
  );
  
};

export default App;