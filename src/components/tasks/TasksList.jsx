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

  const toggleEditTask = (taskId) => {
    setIsEditTaskOpen(!isEditTaskOpen);
    setActiveTaskId(taskId);
  };

  const callGetAllTasks = async () => {
    const allUserTasks = await getAllTasksByUserId(3); //replace with currentUser.id
    setUserTasks(allUserTasks);
  };

  const onNewTaskClick = () => {
    setIsEditTaskOpen(true);
    setActiveTaskId(userTasks.length);
  };

  return (
    <>
      {isEditTaskOpen && (
        <EditTask
          activeTaskId={activeTaskId}
          isModalOpen={isEditTaskOpen}
          toggle={toggleEditTask}
          userTasks={userTasks}
          setUserTasks={setUserTasks}
        />
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
        <Button style={{ width: "100%" }} onClick={onNewTaskClick}>
          New task
          <span style={{ paddingLeft: "0.5rem" }}>
            <AddIcon size={12} />
          </span>
        </Button>
      </div>
    </>
  );
}
