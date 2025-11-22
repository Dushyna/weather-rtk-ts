import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherAction.ts";
import type {WeatherInfo} from "../../utils/types";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
    }
})

export default weatherSlice.reducer;