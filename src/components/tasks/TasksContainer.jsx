import TasksList from "./TasksList";
import "./Tasks.css";

/*
 **Author: LJ White
 **Purpose: Container that hold the list of tasks and any other elements needed for tasks route
 */

export default function TasksContainer({ currentUser }) {
  return (
    <div className="tasks-container">
      <section className="tasks-section">
        <div className="tasks-section-inner">
          <div>
            <TasksList currentUser={currentUser} />
          </div>
        </div>
      </section>
    </div>
  );
}
