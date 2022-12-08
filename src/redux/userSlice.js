import { createSlice } from '@reduxjs/toolkit';

import dummyUserData from '../utils/userData.json';

function getLocalData() {
  const localStorageData = localStorage.getItem('userData');
  return localStorageData ? { ...JSON.parse(localStorageData) } : {};
}
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: getLocalData(),
  },
  reducers: {
    login: (state, { payload }) => {
      const data = dummyUserData.find((user) => user.username === payload);
      state.userData = data ? data : {};
      localStorage.setItem('userData', JSON.stringify(data));
    },
    logout: (state) => {
      state.userData = {};
      localStorage.removeItem('userData');
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
