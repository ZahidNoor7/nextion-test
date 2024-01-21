import axios from "axios";
import { toast } from "react-toastify";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AllProducts {
  productsList: any;
  total: number;
  skip: number;
  limit: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Params {
  id: number;
}

const initialState: {
  productsList: AllProducts | null;
  product: any;
  isLoading: boolean;
  error: string | null;
} = {
  productsList: null,
  product: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_HOST}/products?limit=0`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchProductDetails = createAsyncThunk(
  "products/id",
  async (params: { id: string | any }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_HOST}/products/${params?.id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<AllProducts>) => {
          state.isLoading = false;
          state.productsList = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "An error occurred";
        toast.error(action.error.message ?? "An error occurred");
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchProductDetails.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.product = action.payload;
        }
      )
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "An error occurred";
        toast.error(action.error.message ?? "An error occurred");
      });
  },
});

export const { reducer: productReducer } = productSlice;

export type ProductState = ReturnType<typeof productReducer>;

export default productSlice.reducer;
