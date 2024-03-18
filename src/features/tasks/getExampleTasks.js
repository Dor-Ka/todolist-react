export const getExampleTasks = async () => {
  const response = await fetch("/todolist-react/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statutText);
  }

  return await response.json();
};
