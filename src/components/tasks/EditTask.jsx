import { useState } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

export default function EditTask({ task, isModalOpen, toggle, activeTaskId }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <Modal isOpen={isModalOpen} toggle={toggle} size="sm">
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        Edit your task:
        <Input onChange={handleTaskNameChange} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Add task
        </Button>{" "}
      </ModalFooter>
    </Modal>
    // <div>IS TASK: {task?.id}</div>
  );
}
