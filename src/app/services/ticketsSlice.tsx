/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ExhibitionType, Inputs, InputsShort } from "../interfaces";

export const initialState: Inputs = {
  date: new Date().toISOString().substring(0, 10),
  time: "9:00",
  exhibition: ExhibitionType["Permanent exhibition"],
  basic: 0,
  senior: 0,
  name: "",
  email: "",
  phone: "",
  card__number: "",
  card__exp_month: "",
  card__exp_year: "",
  card__name: "",
  cvv: "",
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addPreData: (state, { payload }: { payload: InputsShort }) => {
      state = Object.assign(state, payload);
    },

    addFullData: (state, { payload }: { payload: Inputs }) => {
      state = Object.assign(state, payload);
    },
  },
});

export const { addPreData, addFullData } = ticketsSlice.actions;
export default ticketsSlice.reducer;
