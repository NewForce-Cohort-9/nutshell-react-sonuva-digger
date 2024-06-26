export const createTask = async (task) => {
  try {
    await fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
  } catch (error) {
    return null;
  }
};

export const updateTask = async (task) => {
  const { index, ...rest } = task; //remove index property added to assist in modifying tasks
  try {
    await fetch(`http://localhost:8088/tasks/${rest.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rest),
    });
  } catch (error) {
    return null;
  }
};

export const getAllTasksByUserId = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:8088/tasks?userId=${userId}`
    );
    const userTasks = await response.json();
    return userTasks;
  } catch (error) {
    return null;
  }
};

export const getAllUncompletedTasksByUserId = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:8088/tasks?userId=${userId}&isComplete=false`
    );
    const userUncompletedTasks = await response.json();
    return userUncompletedTasks;
  } catch (error) {
    return null;
  }
};
