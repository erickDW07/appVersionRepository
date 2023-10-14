import { configureStore } from "@reduxjs/toolkit";
import { appVerdionSlice } from "./appVersionRepository";

export const store = configureStore({
    reducer: {
        appVersionRepsitory: appVerdionSlice.reducer
    }
})