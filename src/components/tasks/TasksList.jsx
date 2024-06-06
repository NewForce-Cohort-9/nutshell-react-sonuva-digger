import { useState, useEffect } from "react";
import { getAllTasksByUserId, updateTask } from "../../services/taskService";
import { Button } from "reactstrap";
import { AddIcon } from "../../assets/icons";
import Task from "./Task";
import EditTask from "./EditTask";

/*
 **Author: LJ White
 **Purpose: Display list of uncompleted and list of completed tasks, renders a Task component for each task
 */

export default function TasksList({ currentUser }) {
  const [userTasks, setUserTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [uncompletePercentage, setUncompletePercentage] = useState(0);

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

    const uncompletedTasks = allTasks
      .filter((task) => !task.isComplete)
      .map((task, index) => ({
        ...task,
        index,
      }));
    const completedTasks = allTasks.filter((task) => task.isComplete);

    const { completionPercentage, uncompletePercentage } =
      calculateCompletionPercentage(allTasks);

    setUserTasks(uncompletedTasks);
    setCompletedTasks(completedTasks);
    setCompletionPercentage(completionPercentage);
    setUncompletePercentage(uncompletePercentage);
    setDidTaskAction(false);
  };

  const calculateCompletionPercentage = (allUserTasks) => {
    const completedTasksCount = allUserTasks.reduce(
      (prev, curr) => (curr.isComplete ? prev + 1 : prev),
      0
    );
    const uncompleteCount = allUserTasks.length - completedTasksCount;

    const completionPercentage =
      (completedTasksCount / allUserTasks.length) * 100;

    const uncompletePercentage = (uncompleteCount / allUserTasks.length) * 100;

    return { completionPercentage, uncompletePercentage };
  };

  const onNewTaskClick = () => {
    setIsEditTaskOpen(true);
    setActiveTaskIndex(userTasks.length);
  };

  const callMarkTaskComplete = async (task, isComplete) => {
    await updateTask({ ...task, isComplete });
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
            <h1
              style={{
                padding: "1rem 0 2rem 0",
                color: "#FFF",
                fontSize: "1.5rem",
              }}
            >
              Uncompleted Tasks ({uncompletePercentage.toFixed(2)})%
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
            <h1
              style={{
                padding: "1rem 0 2rem 0",
                color: "#FFF",
                fontSize: "1.5rem",
              }}
            >
              Completed Tasks ({completionPercentage.toFixed(2)})%
            </h1>
            <div className="tasks-list">
              {completedTasks
                .sort((a, b) => b.id - a.id)
                .map((task) => {
                  return (
                    <Task
                      key={task.id}
                      task={task}
                      toggleEditModal={toggleEditModal}
                      callMarkTaskComplete={callMarkTaskComplete}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
