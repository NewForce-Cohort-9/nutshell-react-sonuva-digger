import { useState, useEffect } from "react";
import { getAllTasksByUserId } from "../../services/taskService";
import { Button } from "reactstrap";
import Task from "./Task";
import EditTask from "./EditTask";
import { AddIcon } from "../../assets/icons";

/*
 **Author: LJ White
 **Purpose: Display list of tasks, renders Task for each task
 */

export default function TasksList({ currentUser }) {
  const [userTasks, setUserTasks] = useState([]);
  const [activeTaskId, setActiveTaskId] = useState(999);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  useEffect(() => {
    callGetAllTasks();
  }, []);

  const toggleEditTask = () => setIsEditTaskOpen(!isEditTaskOpen);

  const callGetAllTasks = async () => {
    const allUserTasks = await getAllTasksByUserId(3); //replace with currentUser.id
    setUserTasks(allUserTasks);
  };

  const handleAddNewTask = () => {
    setIsEditTaskOpen(true);
    setActiveTaskId(userTasks.length);
  };

  return (
    <>
      {isEditTaskOpen && (
        <EditTask isModalOpen={isEditTaskOpen} toggle={toggleEditTask} />
      )}

      <div className="tasks-list">
        {userTasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              toggleEditTask={toggleEditTask}
              activeTaskId={activeTaskId}
            />
          );
        })}
        <Button onClick={() => setIsEditTaskOpen(true)}>
          New task
          <AddIcon size={12} />
        </Button>
      </div>
    </>
  );
}
