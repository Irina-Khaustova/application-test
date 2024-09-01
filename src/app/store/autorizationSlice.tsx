import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PayloadAction } from "@reduxjs/toolkit";

interface AutorizationState {
  userName: string;
}

// Определение начального состояния, используя тип
const initialState: AutorizationState = {
  userName: "",
};

console.log(1);

export const autorizationSlice = createSlice({
  name: "autorization",
  initialState,
  reducers: {
    setIsAutorization(state, action: PayloadAction<string>) {
      const newname = action.payload;
      console.log(11, action.payload, newname);
      state.userName = newname;
    },
  },
});

export const { setIsAutorization } = autorizationSlice.actions;
export const autorization = (state: RootState) => state.autorization;
export default autorizationSlice.reducer;
