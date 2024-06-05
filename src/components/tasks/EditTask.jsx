import { useState } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

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
}) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());

  const isNewTask = activeTaskId === userTasks.length;

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const addNewTask = async () => {
    const newTask = {
      id: activeTaskId,
      task: taskName,
      completionDate: taskDate,
    };
    const newTasks = [newTask, ...userTasks];

    toggle();
    console.log("new", newTasks);
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
            <Input onChange={handleTaskNameChange} />
          </div>
          <div>
            {isNewTask ? "Enter a completion date" : "Edit completion date"}
            <input type="date" />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={isNewTask ? addNewTask : console.log("lol")}
        >
          {isNewTask ? "Add task" : "Edit task"}
        </Button>{" "}
      </ModalFooter>
    </Modal>
    // <div>IS TASK: {task?.id}</div>
  );
}
