import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    ticketBuy: null,
    ticketSeat: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.clear();
    },
    buyTicket: (state, action) => {
      state.ticketBuy = action.payload;
    },
    selectedSeat: (state, action) => {
      state.ticketSeat = action.payload;
    },
  },
});

export const { login, logout, buyTicket, selectedSeat } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const ticketBuy = (state) => state.user.ticketBuy;
export const chooseTicket = (state) => state.user.ticketSeat;

export default userSlice.reducer;
