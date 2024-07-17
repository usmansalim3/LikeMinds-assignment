import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"mySlice",
    initialState: {
        SearchHistory: []
    },
    reducers:{
        addHistory:(state,{payload})=>{
            state.SearchHistory.push({query:payload.query,date:new Date().getTime()})
        }
    }
})
export const {addHistory} =  slice.actions
export default slice.reducer