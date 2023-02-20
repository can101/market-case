import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncThunk = createAsyncThunk(
    'data/fetch',
    async () => {
        const URL = '/data/db.json';
        const { data } = await axios.get(URL);
        return data;
    }
);
