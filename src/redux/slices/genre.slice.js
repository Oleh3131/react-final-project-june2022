import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    loading:false,
    error:null,
    averageScore:null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectedWithValue}) => {

        try {

            const {data} = await genreService.getAll();

            return data.genres;

        } catch (e) {

            return rejectedWithValue(e.response.data);

        }

    }
);


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setAverage:(state,action)=>{
            state.averageScore=action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.genres=action.payload
                state.loading = false;
            })
            .addCase(getAll.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error=action.payload
                state.loading = false;
            })
    }
});


const {reducer:genreReducer,actions:{setAverage}} = genreSlice;

const genreAction={
    getAll,
    setAverage
}

export {
    genreAction,
    genreReducer
}

