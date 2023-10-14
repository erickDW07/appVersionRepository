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
        },
        updateApp: (state, action) =>{
            state.apps = state.apps.map((app)=>{
                if(app.id == action.id)
                   return action
                return app;
            });
            state.isLoading = false;
        }  
    }
});

export const {setApps, updateApp, startLoadingApps, addApp} = appVerdionSlice.actions;