import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const API = 'http://localhost:5000/policies';

export const fetchPolicies = createAsyncThunk('policies/fetch', async () => {
  const response = await axios.get(API);
  return response.data;
});

export const generatePolicies = createAsyncThunk('policies/generate', async () => {
  const mockData = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    policyNumber: faker.finance.accountNumber(),
    type: faker.helpers.arrayElement(['Life', 'Health', 'Vehicle']),
    premium: faker.finance.amount(1000, 10000, 0),
    startDate: faker.date.past().toISOString().split('T')[0],
    endDate: faker.date.future().toISOString().split('T')[0]
  }));

  await Promise.all(mockData.map((item) => axios.post(API, item)));
  return mockData;
});

const policiesSlice = createSlice({
  name: 'policies',
  initialState: {
    data: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolicies.pending, (state) => { state.loading = true; })
      .addCase(fetchPolicies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(generatePolicies.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
      });
  }
});

export default policiesSlice.reducer;
