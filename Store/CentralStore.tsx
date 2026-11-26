import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";

const centralStore = configureStore({
  reducer: {},
});

export default centralStore;

// TypeScript

export type RootState = ReturnType<typeof centralStore.getState>;
export type AppDispatch = typeof centralStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
