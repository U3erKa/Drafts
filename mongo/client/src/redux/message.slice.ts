import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as API from 'api';
import { createExtraReducers } from 'utils';

const SLICE_NAME = 'messages';

const initialState = {
  messages: [] as string[],
  isLoading: false,
  error: null,
};

const getMessages = createAsyncThunk(`${SLICE_NAME}/getMessages`, async (options, thunkAPI) => {
  try {
    const {
      data: { data: messages },
    } = await API.getMessages(options);

    return messages;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.messages = action.payload;
};

const messageSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addMessageError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    createExtraReducers({ thunk: getMessages, fulfilledReducer })(builder);
  },
});

const {
  reducer,
  actions: { addMessage, addMessageError },
} = messageSlice;

export { getMessages, addMessage, addMessageError };
export default reducer;
