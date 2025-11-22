import {api_key, base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: builder => ({
        getWeatherByCity: builder.query({
            query: city => `?q=${city}&appid=${api_key}&units=metric`
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi;

// export const fetchWeather = createAsyncThunk(
//     'fetch/weather',
//     async (city: string) => {
//         const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//         if(!response.ok){
//             throw new Error('Enter correct city name')
//         }
//         const data = await response.json();
//         return {
//             country: data.sys.country,
//             city: data.name,
//             temp: data.main.temp,
//             pressure: data.main.pressure,
//             sunset: new Date(data.sys.sunset * 1000)
//         }
//     }
// )