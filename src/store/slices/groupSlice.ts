import { createSlice } from "@reduxjs/toolkit";
import { Group } from "../../interfaces/Group";



interface IGroupSlice{
    groups: Group[];
    isLoading: boolean;
    error: Error | null;
}

const initialState: IGroupSlice = {
    groups: [],
    isLoading: true,
    error: null
}

export const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {

    },
})