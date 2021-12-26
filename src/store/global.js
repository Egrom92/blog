import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => ({
  mobileMenuOpen: false,
});

export const globalSlice = createSlice({
  name: 'global',

  initialState: getInitialState(),

  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const mobileMenuToggle = (params) => async (dispatch) => {
  dispatch(
    setState({
      mobileMenuOpen: params.mobileMenuOpen
    })
  );
};

export const { get, setState } = globalSlice.actions;

export default globalSlice.reducer;
