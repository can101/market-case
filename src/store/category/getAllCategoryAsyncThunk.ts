import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// import { type IProduct } from "../../types";
// import axios from "axios";

export const getAllCategoryAsyncThunk = createAsyncThunk(
    'category/get',
    async () => {
        const {data: {categories}} = await axios.get("/data/db.json");
        return categories;
    }
);
