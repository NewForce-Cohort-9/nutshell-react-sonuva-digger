import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { createTask } from "../../services/taskService";

/*
 **Author: LJ White
 **Purpose: Edit or add tasks
 */

export default function EditTask({
  isModalOpen,
  toggle,
  activeTaskId,
  userTasks,
  setUserTasks,
  currentUser,
}) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());

  const isNewTask = activeTaskId === userTasks.length;
  const existingTask = userTasks.find((task) => task.id === activeTaskId);

  useEffect(() => {
    if (!isNewTask) {
      setTaskName(existingTask.task);
      setTaskDate(existingTask.completionDate);
    }
  }, []);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDateChange = (e) => {
    console.log("e", e.target.value);
  };

  const addNewTask = async () => {
    const newTask = {
      userId: currentUser.id,
      task: taskName,
      completionDate: taskDate ?? new Date(),
      isComplete: false,
    };
    await createTask(newTask);

    const newTasks = [...userTasks, newTask].map((obj, index) => ({
      ...obj,
      id: index,
    }));

    setUserTasks(newTasks);
    toggle();
  };

  const editTask = async () => {
    //TODO
  };

  return (
    <Modal isOpen={isModalOpen} toggle={toggle} size="sm">
      <ModalHeader toggle={toggle}>
        {isNewTask ? "Add a task" : "Edit your task"}
      </ModalHeader>
      <ModalBody>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            {isNewTask ? "Enter a task" : "Edit your task"}
            <Input value={taskName} onChange={handleTaskNameChange} />
          </div>
          <div>
            {isNewTask ? "Enter a completion date" : "Edit completion date"}
            <input
              value={taskDate}
              type="date"
              onChange={handleTaskDateChange}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={isNewTask ? addNewTask : editTask}>
          {isNewTask ? "Add task" : "Edit task"}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
