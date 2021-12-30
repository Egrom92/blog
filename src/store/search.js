import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',

  initialState: {
    toggleSearchModal: true,
  },

  reducers: {
    setSearchModalOpen: (state) =>{
      state.toggleSearchModal = !state.toggleSearchModal
    }
  },

});

export const searchModalToggle = (params) => async (dispatch) => {

  dispatch(
    setSearchModalOpen()
  );
};

export const { setSearchModalOpen } = searchSlice.actions;

export default searchSlice.reducer;
