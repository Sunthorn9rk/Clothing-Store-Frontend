// store.js มีหน้าที่รวบรวม storeต่างๆ
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});
