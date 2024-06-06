import { useState, useEffect } from "react";
import {
  getAllUncompletedTasksByUserId,
  getAllTasksByUserId,
  updateTask,
} from "../../services/taskService";
import { Button } from "reactstrap";
import { AddIcon } from "../../assets/icons";
import Task from "./Task";
import EditTask from "./EditTask";

/*
 **Author: LJ White
 **Purpose: Display list of tasks, renders a Task component for each uncompleted task
 */

export default function TasksList({ currentUser }) {
  const [userTasks, setUserTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [activeTaskIndex, setActiveTaskIndex] = useState(null);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [didTaskAction, setDidTaskAction] = useState(false);

  useEffect(() => {
    if (currentUser.id || didTaskAction) getAndSetUserTasks();
  }, [currentUser.id, didTaskAction]);

  const toggleEditModal = (taskIndex, taskId) => {
    setIsEditTaskOpen(!isEditTaskOpen);
    setActiveTaskIndex(taskIndex);
    setActiveTaskId(taskId);
  };

  const getAndSetUserTasks = async () => {
    const allTasks = await getAllTasksByUserId(currentUser.id);
    // const tasksWithIndex = allUserUncompletedTasks.map((task, index) => ({
    //   ...task,
    //   index,
    // }));
    const uncompletedTasks = allTasks
      .filter((task) => !task.isComplete)
      .map((task, index) => ({
        ...task,
        index,
      }));

    const completedTasks = allTasks
      .filter((task) => task.isComplete)
      .map((task, index) => ({
        ...task,
        index,
      }));

    console.log("un", uncompletedTasks);
    console.log("complete", completedTasks);

    setUserTasks(uncompletedTasks);
    setCompletedTasks(completedTasks);

    setDidTaskAction(false);
  };

  const onNewTaskClick = () => {
    setIsEditTaskOpen(true);
    setActiveTaskIndex(userTasks.length);
  };

  const callMarkTaskComplete = async (task) => {
    await updateTask({ ...task, isComplete: true });
    setDidTaskAction(true);
  };

  return (
    <>
      {isEditTaskOpen && (
        <EditTask
          activeTaskIndex={activeTaskIndex}
          activeTaskId={activeTaskId}
          isEditTaskOpen={isEditTaskOpen}
          toggleEditModal={toggleEditModal}
          userTasks={userTasks}
          setUserTasks={setUserTasks}
          currentUser={currentUser}
          setDidTaskAction={setDidTaskAction}
        />
      )}

      <section className="tasks-section">
        <div className="tasks-section-inner">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ padding: "1rem 0 2rem 0", color: "#FFF" }}>
              Uncompleted Tasks
            </h1>
            <div className="tasks-list">
              {userTasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    toggleEditModal={toggleEditModal}
                    callMarkTaskComplete={callMarkTaskComplete}
                  />
                );
              })}
              <Button style={{ width: "100%" }} onClick={onNewTaskClick}>
                Add a new task
                <span style={{ paddingLeft: "0.5rem" }}>
                  <AddIcon size={12} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="tasks-section">
        <div className="tasks-section-inner">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ padding: "1rem 0 2rem 0", color: "#FFF" }}>
              Completed Tasks
            </h1>
            <div className="tasks-list">
              {completedTasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    toggleEditModal={toggleEditModal}
                    callMarkTaskComplete={callMarkTaskComplete}
                  />
                );
              })}
              <Button style={{ width: "100%" }} onClick={onNewTaskClick}>
                Add a new task
                <span style={{ paddingLeft: "0.5rem" }}>
                  <AddIcon size={12} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
