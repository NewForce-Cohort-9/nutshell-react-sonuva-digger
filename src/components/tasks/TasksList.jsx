import { useState, useEffect } from "react";
import {
  getAllUncompletedTasksByUserId,
  updateTask,
  getAllTasksByUserId,
} from "../../services/taskService";
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
    if (currentUser.id) callGetAllUserTasks();
  }, [currentUser.id]);

  const toggleEditTask = (taskId) => {
    setIsEditTaskOpen(!isEditTaskOpen);
    setActiveTaskId(taskId);
  };

  const callGetAllUserTasks = async () => {
    const allUserUncompletedTasks = await getAllUncompletedTasksByUserId(
      currentUser.id
    );
    setUserTasks(allUserUncompletedTasks);
  };

  const onNewTaskClick = () => {
    setIsEditTaskOpen(true);
    setActiveTaskId(userTasks.length);
  };

  const callMarkTaskComplete = async (task) => {
    await updateTask({ ...task, isComplete: true });
    const newTasks = userTasks.filter((item) => item.id !== task.id);
    setUserTasks(newTasks);
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
          currentUser={currentUser}
        />
      )}

      <div className="tasks-list">
        {userTasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              toggleEditTask={toggleEditTask}
              callMarkTaskComplete={callMarkTaskComplete}
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
