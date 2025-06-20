import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const API = 'http://localhost:5000/claims';

export const fetchClaims = createAsyncThunk('claims/fetch', async () => {
  const response = await axios.get(API);
  return response.data;
});

export const generateClaims = createAsyncThunk('claims/generate', async () => {
  const mockData = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    claimNumber: faker.string.alphanumeric(10).toUpperCase(),
    amount: faker.finance.amount(500, 20000, 0),
    status: faker.helpers.arrayElement(['Pending', 'Approved', 'Rejected']),
    filedOn: faker.date.past().toISOString().split('T')[0]
  }));

  await Promise.all(mockData.map((item) => axios.post(API, item)));
  return mockData;
});

const claimsSlice = createSlice({
  name: 'claims',
  initialState: {
    data: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClaims.pending, (state) => { state.loading = true; })
      .addCase(fetchClaims.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(generateClaims.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
      });
  }
});

export default claimsSlice.reducer;
