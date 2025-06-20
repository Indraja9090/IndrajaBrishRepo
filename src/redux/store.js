// Each slice will contain async calls to fetch & post data.
import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './slices/customersSlice';
import policiesReducer from './slices/policiesSlice';
import claimsReducer from './slices/claimsSlice';

const store = configureStore({
  reducer: {
    customers: customersReducer,
    policies: policiesReducer,
    claims: claimsReducer,
  },
});

export default store;
