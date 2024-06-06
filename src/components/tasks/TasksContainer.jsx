import TasksList from "./TasksList";
import "./Tasks.css";

/*
 **Author: LJ White
 **Purpose: Container that hold the list of tasks and any other elements needed for tasks route.
 ** Allows other elements to be added easily other than the TasksList in the future
 */

export default function TasksContainer({ currentUser }) {
  return (
    <div className="tasks-container">
      <TasksList currentUser={currentUser} />
    </div>
  );
}
