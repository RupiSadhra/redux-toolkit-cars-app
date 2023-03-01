import { createSlice } from "@reduxjs/toolkit";

const formsSlice = createSlice({
  name: "form",
  initialState: {},
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeCost, changeName } = formsSlice.actions;
export const formReducer = formsSlice.reducer;
console.log(formsSlice.reducer);
