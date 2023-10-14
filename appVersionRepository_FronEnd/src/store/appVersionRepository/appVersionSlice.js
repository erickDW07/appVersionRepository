import { createSlice } from "@reduxjs/toolkit";

export const appVerdionSlice = createSlice({
    name: 'appVersionRepsitory',
    initialState: {
        apps: [],
        isLoading: false
    },
    reducers: {
        startLoadingApps: (state)=>{
            state.isLoading = true;
           
        },
        setApps: (state, action) =>{
            state.apps = action.payload;
            state.isLoading = false;
        },
        addApp: (state, action) =>{
            state.apps.push(action.payload);
            state.isLoading = false;
        }   
    }
});

export const {setApps, startLoadingApps, addApp} = appVerdionSlice.actions;