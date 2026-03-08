import { userSlice } from "@/pages/forms/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer
    }
});