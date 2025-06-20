import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const API = 'http://localhost:5000/customers';

export const fetchCustomers = createAsyncThunk('customers/fetch', async () => {
  const response = await axios.get(API);
  return response.data;
});

export const generateCustomers = createAsyncThunk('customers/generate', async () => {
  const mockData = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.city()
  }));

  await Promise.all(mockData.map((item) => axios.post(API, item)));
  return mockData;
});

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    data: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => { state.loading = true; })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(generateCustomers.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
      });
  }
});

export default customersSlice.reducer;
