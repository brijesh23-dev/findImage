import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const storedCollection = JSON.parse(localStorage.getItem("collection") || "[]");
const initialState = {
  items: Array.isArray(storedCollection) ? storedCollection : [],
};
const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addTaost: () => {
      toast.success("item added to collection");
    },
    removeTaost: () => {
      toast.error("an item removed from collection.");
    },
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
