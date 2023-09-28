import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import emailReducer from "./emailPayloadSlice";
import databaseReducer from "./databaseUsersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    emailPayload: emailReducer,
    databaseUsers: databaseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
