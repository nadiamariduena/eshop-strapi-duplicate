import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "cartfav",
  initialState: {
    products: [],
    // favorites: [],
  },

  reducers: {
    // --- favorites
    addToFav: (ade, actione) => {
      const item = actione.payload;
      const itemInSaved = ade.products.find((i) => i.id === item.id);
      // fav

      if (!itemInSaved) {
        // If item is not already saved, add it to the saved list
        ade.products.push(item);
      }
    },

    //btn remove
    // ---------- REMOVE
    //
    removeItemFav: (state, action) => {
      const newProducts = (state.products = state.products.filter(
        (item) => item.id !== action.payload
      ));
      if (newProducts.length === 0) {
        // Redirect to home page if there are no more items in favorites
        window.location.href = "/";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFav, removeItemFav } = favSlice.actions;

export default favSlice.reducer;
