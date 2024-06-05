import { useState, useEffect } from "react";
import { getAllTasksByUserId } from "../../services/taskService";
import Task from "./Task";

/*
 **Author: LJ White
 **Purpose: Display list of tasks, renders Task for each task
 */

export default function TasksList({ currentUser }) {
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    callGetAllTasks();
  }, []);

  const callGetAllTasks = async () => {
    const allUserTasks = await getAllTasksByUserId(3); //replace with currentUser.id
    setUserTasks(allUserTasks);
  };

  return (
    <div className="tasks-list">
      {userTasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}
