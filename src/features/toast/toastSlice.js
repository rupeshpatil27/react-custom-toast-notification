import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastMsg: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.toastMsg = action.payload;
    },
    removeToast: (state) => {
      state.toastMsg = null;
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
