import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userSlise";

export const store = configureStore({
    reducer: {
        
        user: userSlice 
    }
})