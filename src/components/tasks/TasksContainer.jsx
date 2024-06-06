import TasksList from "./TasksList";
import "./Tasks.css";

/*
 **Author: LJ White
 **Purpose: Container that hold the list of tasks and any other elements needed for tasks route
 */

export default function TasksContainer({ currentUser }) {
  return (
    // <div className="tasks-container">
    //   <section className="tasks-section">
    //     <div className="tasks-section-inner">
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //         }}
    //       >
    //         <h1 style={{ padding: "1rem 0 2rem 0", color: "#FFF" }}>
    //           Uncompleted Tasks
    //         </h1>
    //         <TasksList currentUser={currentUser} />
    //       </div>
    //     </div>
    //   </section>
    //   <section className="tasks-section">
    //     <div className="tasks-section-inner">
    //       <div style={{ display: "flex", flexDirection: "column" }}>
    //         <h1 style={{ padding: "1rem 0 2rem 0", color: "#FFF" }}>
    //           Completed Tasks
    //         </h1>
    //         {/* <TasksList currentUser={currentUser} /> */}
    //         {/* Other TasksList here */}
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="tasks-container">
      <TasksList currentUser={currentUser} />
    </div>
  );
}
