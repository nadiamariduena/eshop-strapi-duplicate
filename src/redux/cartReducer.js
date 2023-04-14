import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    // favorites: [],
  },

  reducers: {
    //
    //
    // ---------- ADD TO CART
    //
    addToCart: (state, action) => {
      const item = action.payload;
      const itemInCart = state.products.find((i) => i.id === item.id);

      if (itemInCart) {
        // If item is already in the cart, increment its quantity
        item.quantity += 1;
      } else {
        // Otherwise, add the item to the cart with a quantity of 1
        state.products.push({ ...item, quantity: 1 });
      }
    },

    // --- favorites

    // ---------- REMOVE
    //
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    //
    // ---------- RESET
    //
    resetCart: (state) => {
      state.products = [];
    },
    //
    //
    //
    // ---------- INCREASE & DECREASE
    //
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    //
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});
//
// ----------
// ----------

// -----------
// -----------
//
//
// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

// \*\* fav

export default cartSlice.reducer;
