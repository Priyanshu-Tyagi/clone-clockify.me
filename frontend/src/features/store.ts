import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import projectsSlice from './projects/projectsSlice'
import authSlice from "./auth/authSlice";
import tasksSlice from "./tasks/tasksSlice";
import groupsSlice from "./groups/groupsSlice"

const store = configureStore({
    reducer:{
        projectsSlice,authSlice,tasksSlice, groupsSlice
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 