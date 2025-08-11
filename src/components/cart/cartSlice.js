import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [],
  //  const newItem = {
  //     idDessert: id,
  //     image,
  //     name,
  //     category,
  //     quantity: 1,
  //     unitprice: price,
  //     totalPrice: price * 1,
  //   };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.idDessert !== action.payload,
      );
    },

    incrementItemQuantity(state, action) {
      const item = state.cart.find((item) => item.idDessert === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
      console.log(item.quantity, item.unitPrice, "vien du reducers");
    },

    decrementItemQuantity(state, action) {
      const item = state.cart.find((item) => item.idDessert === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    deleteCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incrementItemQuantity,
  decrementItemQuantity,
  deleteCart,
} = cartSlice.actions;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.idDessert === id)?.quantity ?? 0;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getCart = (state) => state.cart.cart;
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export default cartSlice.reducer;
