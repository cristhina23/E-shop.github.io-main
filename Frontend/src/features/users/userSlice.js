import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from './userService';

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const initialState = {
  user: '',
  isError: false,
  isSuccsess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending,(state) => {
      state.isLoading = true;
    }).addCase(registerUser.fulfilled,(state,action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccsess = true;
    }).addCase(registerUser.rejected,(state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccsess = false;
      state.message = action.error
    })
  }
});