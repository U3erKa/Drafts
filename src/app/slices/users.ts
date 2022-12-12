import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as API from 'app/api';
import { JSONPLACEHOLDER_RESOURCES } from 'app/constants';
import { UsersEntries } from 'types/api';

const SLICE_NAME = 'users';

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`, async (arg, thunkAPI) => {
  try {
    const { data: users } = await API.getUsers(JSONPLACEHOLDER_RESOURCES.USERS);
    return users;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

type SliceState = {
  users: UsersEntries[];
  isLoading: boolean;
  error: any;
};

const initialState: SliceState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { getUsers };
export default usersSlice.reducer;
