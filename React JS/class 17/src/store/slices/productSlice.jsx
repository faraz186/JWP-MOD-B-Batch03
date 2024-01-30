import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProducts: [],
  isloading: false,
  isError: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isloading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isloading = false;
      state.allProducts = action.payload;
      state.isError = "error";
    });
  },
});

export const fetchData = createAsyncThunk(
  "products/fetch",
  async (name, rejectWithValue) => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products/");
      // console.log(data.data);
      return data.data;
    } catch (err) {
      return rejectWithValue(data);
    }
  }
);

const { actions, reducer } = productSlice;

export default reducer;
