import TasksList from "./TasksList";
import "./Tasks.css";

/*
 **Author: LJ White
 **Purpose: Container that holds wrappers/other stylistic stuff and the list of tasks
 */

export default function TasksContainer({ currentUser }) {
  return (
    <div>
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
