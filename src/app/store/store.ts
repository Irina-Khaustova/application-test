import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import autorization from "./autorizationSlice";
import { myApi } from "../../api/MyApi";

export const store = configureStore({
  reducer: {
    autorization: autorization,
    [myApi.reducerPath]: myApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
