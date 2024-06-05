import { useState } from "react";
import { ChecklistIcon, DateIcon, EditPencil } from "../../assets/icons";
import { markTaskComplete } from "../../services/taskService";

/*
 **Author: LJ White
 **Purpose: Provides a visual component for a task
 */

export default function Task({ task, toggleEditTask }) {
  const [isEditingTask, setIsEditingTask] = useState(false);

  const callMarkTaskComplete = async () => {
    console.log("task is", task);
    // await markTaskComplete(task);
  };

  return (
    <>
      <div style={{ position: "relative", paddingBottom: "1rem" }}>
        <div>
          <div className="task-shadow">
            <div>
              <div className="task-flex">
                <div className="task-border">
                  {/* <ArrowIcon size={16} /> */}
                </div>
                <div
                  onClick={() => console.log("lol")}
                  className="task-content"
                >
                  <div className="task-inner-row">
                    <div style={{ width: "100%", paddingRight: "0.75rem" }}>
                      <div>
                        <div className="task-grid">
                          <div className="task-title-ctn">
                            <span className="task-title">{task.task}</span>
                          </div>
                          <div
                            onClick={toggleEditTask}
                            className="task-inline-flex"
                          >
                            <span className="task-btn">
                              <p className="task-para">{task.task}</p>
                              <span
                                style={{
                                  marginLeft: "0.5rem",
                                  display: "flex",
                                }}
                              >
                                <EditPencil size={16} />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="task-check-ctn">
                      <label className="task-check">
                        <input
                          type="checkbox"
                          name="completed"
                          checked={task.isCompleted ? true : false}
                          onChange={callMarkTaskComplete}
                        />
                        <div
                          style={{
                            backgroundColor: task.isCompleted
                              ? "#16a34a"
                              : "#64748b",
                          }}
                        >
                          <span
                            style={{
                              transform:
                                task.isCompleted && "translateX(0.75rem)",
                            }}
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="task-icon-ctn">
                    <div className="task-icon-inner">
                      <div className="task-icon-holder">
                        <button
                          style={{ all: "unset", cursor: "pointer" }}
                          onClick={toggleEditTask}
                        >
                          <span style={{ marginRight: "0.25rem" }}>
                            <DateIcon size={16} color="#6b7280" />
                          </span>
                        </button>
                      </div>
                      <div className="task-icon-holder">
                        <div>
                          <span style={{ marginRight: "0.25rem" }}>
                            <ChecklistIcon size={16} color="#6b7280" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
