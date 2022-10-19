import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies:[],
    loading:false,
    error:null,
    oneMovie:null,
    pageNumber:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectedWithValue}) => {
        try {
            
            const {data} = await movieService.getAll(page=`${page}`);

            return data;

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

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query}, {rejectedWithValue}) => {
        try {

            const {data} = await movieService.search(query=`${query}`);


            return data.results;



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
                state.movies = action.payload.results;
                state.pageNumber=action.payload.page
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
            .addCase(search.fulfilled,(state,action)=>{
                state.movies=action.payload
            })
    }
});


const {reducer:movieReducer} = movieSlice;

const movieActions={
    getAll,
    getById,
    search
}

export {
    movieReducer,
    movieActions
}