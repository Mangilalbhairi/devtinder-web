import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isAuthentigate: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthentigate = true;
    },

    removeUser: (state) => {
      state.user = null;
      state.isAuthentigate = false;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
