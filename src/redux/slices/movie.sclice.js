import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies:[],
    loading:false,
    error:null,
    oneMovie:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {

            const {data} = await movieService.getAll();

            return data.results;

        } catch (e) {

            return rejectedWithValue(e.response.data);

        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {

            const {data} = await movieService.getById(id);

            return data;

        } catch (e) {

            return rejectedWithValue(e.response.data);

        }
    }
);

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled,(state,action)=>{
                state.oneMovie = action.payload;
            })
    }
});


const {reducer:movieReducer} = movieSlice;

const movieActions={
    getAll,
    getById
}

export {
    movieReducer,
    movieActions
}