import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { createTask, updateTask } from "../../services/taskService";

/*
 **Author: LJ White
 **Purpose: Modify/edit or add a task
 */

export default function EditTask({
  isEditTaskOpen,
  toggleEditModal,
  activeTaskIndex,
  activeTaskId,
  userTasks,
  currentUser,
  setDidTaskAction,
}) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());

  const isNewTask = activeTaskIndex === userTasks.length;
  const existingTask = userTasks[activeTaskIndex];

  useEffect(() => {
    if (!isNewTask && existingTask) {
      setTaskName(existingTask.task);
      setTaskDate(existingTask.completionDate.slice(0, 10));
    }
  }, []);

  const addNewTask = async () => {
    const newTask = {
      userId: currentUser.id,
      task: taskName,
      completionDate: new Date(taskDate).toISOString(),
      isComplete: false,
    };

    await createTask(newTask);
    setDidTaskAction(true);
    toggleEditModal();
  };

  const editTask = async () => {
    const editedTask = {
      id: activeTaskId,
      userId: currentUser.id,
      task: taskName,
      completionDate: new Date(taskDate).toISOString(),
      isComplete: false,
    };
    await updateTask(editedTask);
    setDidTaskAction(true);

    toggleEditModal();
  };

  return (
    <Modal isOpen={isEditTaskOpen} toggle={toggleEditModal} size="md">
      <ModalHeader toggle={toggleEditModal}>
        {isNewTask ? "Add a task" : "Edit your task"}
      </ModalHeader>
      <ModalBody>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            {isNewTask ? "Enter a task" : "Edit your task"}
            <Input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {isNewTask ? "Enter a completion date" : "Edit completion date"}
            <input
              value={taskDate}
              type="date"
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggleEditModal}>
          Cancel
        </Button>
        <Button color="primary" onClick={isNewTask ? addNewTask : editTask}>
          {isNewTask ? "Add task" : "Edit task"}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
