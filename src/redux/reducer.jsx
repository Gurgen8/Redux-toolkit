import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const initialState = [];

const addTodoReducer = createSlice({
  name: "cube",
  initialState,
  reducers: {

    addItem: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    removeAll: (state) => {
      return state = []

    },
    sorted: (state) => {
      const newState = _.sortBy(state, ['id'])
      //.reverse()
      return newState
    }
  },
});

export const { addItem, removeItem, removeAll, sorted } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
