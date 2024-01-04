import { UserProfile } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../../app/serivices/profile";
import { RootState } from "../../app/store";

interface InitialState {
    profile: UserProfile | null;
}

const initialState: InitialState = {
    profile: null,
}

const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => {
                state.profile = action.payload;
            })
    }
})

export default slice.reducer;

export const selectProfile = (state: RootState) => state.profile;