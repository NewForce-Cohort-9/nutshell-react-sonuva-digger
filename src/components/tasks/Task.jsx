import {
  ChecklistIcon,
  CheckmarkCircle,
  DateIcon,
  EditPencil,
} from "../../assets/icons";

/*
 **Author: LJ White
 **Purpose: Provides a visual component for a task
 */

export default function Task({ task, toggleEditModal, callMarkTaskComplete }) {
  return (
    <>
      <div style={{ position: "relative", paddingBottom: "1rem" }}>
        <div>
          <div className="task-shadow">
            <div>
              <div className="task-flex">
                <div className="task-border">
                  {!task.isComplete && (
                    <p className="task-para">#{task.index + 1}</p>
                  )}
                </div>
                <div className="task-content">
                  <div className="task-inner-row">
                    <div style={{ width: "100%", paddingRight: "0.75rem" }}>
                      <div>
                        <div className="task-grid">
                          <div className="task-title-ctn">
                            <span className="task-title">{task.task}</span>
                          </div>
                          <div
                            onClick={() => toggleEditModal(task.index, task.id)}
                            className="task-inline-flex"
                          >
                            {!task.isComplete && (
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
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="task-check-ctn">
                      <label className="task-check">
                        <input
                          type="checkbox"
                          name="completed"
                          checked={task.isComplete ? true : false}
                          onChange={() =>
                            callMarkTaskComplete(task, !task.isComplete)
                          }
                        />
                        <div
                          style={{
                            backgroundColor: task.isComplete
                              ? "#16a34a"
                              : "#64748b",
                          }}
                        >
                          <span
                            style={{
                              transform:
                                task.isComplete && "translateX(0.75rem)",
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
                          style={{
                            all: "unset",
                            cursor: task.complete ? "default" : "pointer",
                          }}
                          onClick={() =>
                            !task.isComplete &&
                            toggleEditModal(task.index, task.id)
                          }
                        >
                          <span style={{ marginRight: "0.25rem" }}>
                            <DateIcon size={16} color="#6b7280" />
                            <span
                              style={{
                                fontSize: "0.75rem",
                                paddingLeft: "0.5rem",
                                textAlign: "center",
                              }}
                            >
                              {task.completionDate.slice(0, 10)}
                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="task-icon-holder">
                        <div>
                          <span style={{ marginRight: "0.25rem" }}>
                            {task.isComplete ? (
                              <CheckmarkCircle size={16} color="#16a34a" />
                            ) : (
                              <ChecklistIcon size={16} color="#6b7280" />
                            )}
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
