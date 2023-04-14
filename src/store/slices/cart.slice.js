import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    allCarts: [
      {
        id: 1,
        name: "BOUGHT TOGETHER",
        href: "#",
        color: "Chestnut",
        price: "$90.00",
        quantity: 1,
        imageSrc:
          "https://cdn.shopify.com/s/files/1/0673/3588/1018/products/12-8_small.jpg?v=1668764966",
        imageAlt:
          "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
      },
      {
        id: 2,
        name: "SHARM CLUB BRACELET",
        href: "#",
        color: "Blue",
        price: "$32.00",
        quantity: 1,
        imageSrc:
          "https://cdn.shopify.com/s/files/1/0673/3588/1018/products/9_a78d459f-afc4-4b95-a98c-694327416931_small.jpg?v=1667484812",
        imageAlt:
          "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
      },
    ],
  },
  reducers: {
    addCart: {
      reducer(state, action) {
        state.allCarts.unshift(action.payload);
      },
      prepare(name, href, color, price, quantity, imageSrc) {
        return {
          payload: {
            id: nanoid(),
            name,
            href,
            color,
            price,
            quantity,
            imageSrc,
            completed: false,
          },
        };
      },
    },
    markComplete(state, action) {
      const todoId = action.payload;
      state.allCarts = state.allCarts.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      state.allCarts = state.allCarts.filter((todo) => todo.id !== todoId);
    },
  },
});

// Reducer
const cartsReducer = cartSlice.reducer;

// Selector
export const cartsSelector = (state) => state.cartsReducer.allCarts;

// Action export
export const { addCart, markComplete, deleteTodo } = cartSlice.actions

// Export reducer
export default cartsReducer;
