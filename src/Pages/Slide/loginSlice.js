import {
    createSlice,
    createAsyncThunk,
    createAction,
    current,
  } from "@reduxjs/toolkit";

  export const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: "",
        password: ""
    },
    reducers: {
      setUser(state, action) {
        state.user = action.payload.user;
      },
      setPassword(state, action) {
        state.password = action.payload.password;
      }
    },
    extraReducers(builder) {},
  });
  
  export const { setUser, setPassword } = loginSlice.actions;
  export const getUserData = (state) => ({user: state.login.user, password: state.login.password});

  export default loginSlice.reducer;
  