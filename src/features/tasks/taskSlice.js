import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks.splice(index, 1);
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
} = taskSlice.actions;
export const selectTasks = (state) => state.tasks;
export default taskSlice.reducer;
